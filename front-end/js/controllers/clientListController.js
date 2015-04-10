'use strict';

angular.module('app').controller('ClientListController', function($scope, $location, $log, clientService) {

	$scope.init = function() {
		var query = $location.search();
		$scope.clients = clientService.getClients(query);
		$scope.searchParans = {};
		$scope.searchParans.name = query.name;
		$scope.searchParans.collectionSize = $scope.clients.length;
		$scope.searchParans.currentPage = query.page ? query.page : 1;
		$scope.searchParans.paginatedIn = 5;
	};

	$scope.setPage = function (pageNumber) {
		$scope.searchParans.currentPage = pageNumber;
	};

	$scope.pageChanged = function () {
		$log.log('Page changed to: ' + $scope.searchParans.currentPage);
		$location.path('/clients').search( {'name' : $scope.searchParans.name, 'page' : $scope.searchParans.currentPage } );
	};

	$scope.search = function () {
		$location.path('/clients').search( {'name' : $scope.searchParans.name, 'page' : 1 } );
	}

});
