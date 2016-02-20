angular.module('hello-mean-world.page', [])

.controller('PageController', ['$scope', function ($scope) {
	$scope.greeting = 'Angular says hello.';
	$scope.text = '';
	$scope.list = [];
	$scope.name = 'PageController';
	$scope.addString = function(input) {
		if ($scope.text) {
			$scope.list.push(this.text);
			$scope.text = '';
			console.log($scope.list)
		}
	};
}]);