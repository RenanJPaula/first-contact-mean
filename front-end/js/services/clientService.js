'use strict';

angular.module('app').factory('clientService', function($http, $log, serverPath) {

	var clients = [
		{ 'id' : 1, 'name' : 'Renan', 'workOrders' : 1 },
		{ 'id' : 1, 'name' : 'Renan', 'workOrders' : 1 },
		{ 'id' : 1, 'name' : 'Renan', 'workOrders' : 1 },
		{ 'id' : 1, 'name' : 'Renan', 'workOrders' : 1 },
		{ 'id' : 1, 'name' : 'Renan', 'workOrders' : 1 },
		{ 'id' : 1, 'name' : 'Renan', 'workOrders' : 1 },
		{ 'id' : 1, 'name' : 'Renan', 'workOrders' : 1 },
		{ 'id' : 1, 'name' : 'Renan', 'workOrders' : 1 },
		{ 'id' : 1, 'name' : 'Renan', 'workOrders' : 1 },
		{ 'id' : 1, 'name' : 'Renan', 'workOrders' : 1 },
		{ 'id' : 1, 'name' : 'Rodolfo', 'workOrders' : 2 }
	]; 
	var countId = 0;

	function getClients(search) {
		$log.log('Get in /Clients');
		var clientsSelected = [];
		if (!search.name) {
			clientsSelected = clients;
		} else {
			for (var i = 0; i < clients.length; i++) {
				var client = clients[i];
				if(client.name.search(search.name) != -1) {
					clientsSelected.push(client);
				}
			}
		}
		return clientsSelected;
	}

	function getClient(clientId) {
		for (var i = 0; i < clients.length; i++) {
			var client = clients[i];
			if(client == clientId) {
				return client;
			}
		};
		return null;
	}

	function saveClient(client) {
		if(!client.id) {
			$log.log('Post in /Clients');
			client.id = ++countId;
		} else {
			$log.log('Put in /Clients');
		}
		clients.put(client);
	}

	return {
		'getClient'  : getClient,
		'getClients' : getClients,
		'saveClient' : saveClient
	};
});