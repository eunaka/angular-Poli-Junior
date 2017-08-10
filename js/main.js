angular.module('poliJunior', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])

.config(function($routeProvider, $locationProvider) {
	
	$locationProvider.html5Mode(true);

	$routeProvider.otherwise({redirecTo: '/home'});

	$routeProvider.when('/home', {
		templateUrl: '/partials/home.html',
		controller: 'FotosController'
	})

	.when('/home/new', {
		templateUrl: '/partials/new.html',
		controller: 'NewController'
	});

});
