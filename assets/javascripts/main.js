var eggly = angular.module('Eggly', []);

eggly.controller('MainCtrl', ['$scope', function ($scope) {
	$scope.title = "Eggly";
	$scope.menu = [ 'Home', 'About', 'Contact' ];
}]);
