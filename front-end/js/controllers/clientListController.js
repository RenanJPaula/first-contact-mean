'use strict';

angular.module('app').controller('ClientListController', function($scope, $log, clientService) {

	$scope.init = function() {
		$scope.totalItems = 1;
		$scope.currentPage = 1;
		$scope.maxSize = 5;

		$scope.clients = clientService.getClients();
	};

	$scope.setPage = function (pageNumber) {
		$scope.currentPage = pageNumber;
	};

	$scope.pageChanged = function() {
		$log.log('Page changed to: ' + $scope.currentPage);
	};
});
