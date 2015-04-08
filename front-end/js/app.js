(function() {
'use strict';
	
var app = angular.module('app', ['ui.bootstrap', 'ngRoute']);

app.constant('serverPath', '/api/');

app.config(function ($routeProvider, $locationProvider) {
	$routeProvider	
	.when('/clients', {
		templateUrl: 'view/clientList.html',
		controller: 'ClientListController',
		auth: true
	})
	.when('/client/:id', {
		templateUrl: 'view/clientForm.html',
		controller: 'ClientFormController',
		auth: true
	}).when('/client', {
		templateUrl: 'view/clientForm.html',
		controller: 'ClientFormController',
		auth: true
	})
	.otherwise({
		redirectTo: '/'
	});
});

}());