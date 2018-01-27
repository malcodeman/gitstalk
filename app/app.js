'use strict';
angular.module('shiffAdmin', [
  'ngRoute',
  'myApp.home',
  'myApp.campaigns',
  'myApp.products',
  'myApp.orders',
  'myApp.reports',  
]).
config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({
    redirectTo: '/home'
  });
}]);