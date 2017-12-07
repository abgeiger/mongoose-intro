var app = angular.module('GameApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/game', {
        templateUrl: '/views/game.html',
        controller: 'GameController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});