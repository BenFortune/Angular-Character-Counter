export default function DefaultConfig($locationProvider, $sceDelegateProvider, $httpProvider, $compileProvider) {

    $locationProvider
        .hashPrefix('!')
        .html5Mode(true);

    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://www.youtube.com/**'
    ]);

    // $httpProvider.interceptors.push(interceptor);

    $compileProvider.debugInfoEnabled(false);

}
