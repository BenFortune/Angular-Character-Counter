export default function Config($routeProvider) {
    $routeProvider
        .when('/', {
            template: '<character-counter-page></character-counter-page>'
        })
        .otherwise({
            redirectTo: '/'
        });
}
