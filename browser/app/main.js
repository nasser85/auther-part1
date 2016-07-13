'use strict';

var app = angular.module('auther', ['ui.router'])
	.controller('PageLoad', function($scope, LoginFactory) {
		LoginFactory.checkCookies();
	})

app.config(function ($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
});
