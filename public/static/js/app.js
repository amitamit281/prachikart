'use strict';
var zoombeiApp = angular.module('zoombei', ['ngRoute']);

zoombeiApp.config(function($routeProvider) {	
	
	$routeProvider.when('/index', {
		templateUrl : 'views/main.html',
		controller : 'mainCtrl'		
	}).when('/about', {
		templateUrl : 'views/about.html',
		controller : 'mainCtrl'		
	}).when('/home', {
		templateUrl : 'views/main.html',
		controller : 'mainCtrl'		
	});
});