'use strict';

import gulp from 'gulp';
import gSass from 'gulp-sass';
import gScssLint from 'gulp-scss-lint';
import gAutoPrefixer from 'gulp-autoprefixer';
import gCssComb from 'gulp-csscomb';
import gCssMinify from 'gulp-cssnano';
import gEsLint from 'gulp-eslint';
import gBabel from 'gulp-babel';
import gConcat from 'gulp-concat';
import browserify from 'browserify';
import vinylSourceStream from 'vinyl-source-stream';
import babelify from 'babelify';
import stringify from 'stringify';
import requireDir from 'require-dir'
import gRunSequence from 'run-sequence';
import { gulpConfig } from './config';

gulp.task('stylesBuild', () => {
	return gulp.src(gulpConfig.sassPaths.src)
	.pipe(gScssLint(gulpConfig.scssLint))
	.pipe(gSass())
	.pipe(gAutoPrefixer(gulpConfig.autoPrefixConfig))
	.pipe(gCssComb())
	.pipe(gCssMinify())
	.pipe(gulp.dest(gulpConfig.sassPaths.dest));
});

gulp.task('scriptsLint', () => {
	return gulp.src('./src/*.js')
	.pipe(gEsLint({
		fix: true
	}))
	.pipe(gEsLint.format())
	.pipe(gulp.dest('./dist/js'));
});

gulp.task('browserify', () => {
	return browserify('./src/index.js')
	.transform(stringify, {
		appliesTo: {
			includeExtensions: ['.html']
		}
	})
	.transform(babelify, {presets: ['es2015']})
	.bundle()
	.pipe(vinylSourceStream('scripts-b.js'))
	.pipe(gulp.dest('./dist/js'));
})

gulp.task('scriptsConcat', () => {
	return gulp.src(gulpConfig.jsPaths.filePaths)
	.pipe(gConcat('scripts.min.js'))
	.pipe(gulp.dest(gulpConfig.jsPaths.dest));
})

gulp.task('default', (done) => {
	gRunSequence('stylesBuild', 'scriptsLint', 'browserify', done);
});
