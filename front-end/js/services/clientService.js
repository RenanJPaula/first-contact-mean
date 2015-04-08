'use strict';

angular.module('app').factory('clientService', function($http, $log, serverPath) {

	function getClients() {
		$log.log('Get in /Clients');
		return [ 
			{ 'id' : 10, 'name' : 'Renan Johannsen de Paula', 'workOrders' : 150 },
			{ 'id' : 10, 'name' : 'Renan Johannsen de Paula', 'workOrders' : 150 },
			{ 'id' : 10, 'name' : 'Renan Johannsen de Paula', 'workOrders' : 150 },
			{ 'id' : 10, 'name' : 'Renan Johannsen de Paula', 'workOrders' : 150 }
		];
	}

	return {
		'getClients': getClients
	};
});