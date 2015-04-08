'use strict';

angular.module('app').controller('ClientFormController', function($scope, $log, $routeParams, serverPath) {

	$scope.init = function() {
		$scope.client = {};
		$scope.client.id = $routeParams.id;
		$log.log(serverPath);
	};

});