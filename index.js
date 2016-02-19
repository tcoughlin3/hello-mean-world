angular.module('hello-mean-world', [
	'hello-mean-world.page'
])

.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/angularTemplate.html',
			controller: 'PageController'
		})
});