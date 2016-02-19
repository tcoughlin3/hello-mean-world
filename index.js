angular.module('hello-mean-world', [
	'hello-mean-world.page'
])

.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'MEAN-app/angularTemplate.html',
			controller: 'PageController'
		})
});