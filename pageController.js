angular.module('hello-mean-world.page', [])

.controller('PageController', function ($scope) {
	$scope.text = 'Angular says hello.';
	$scope.name = 'PageController';
});