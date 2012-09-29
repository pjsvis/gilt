'use strict';

// Declare app level module which depends on filters, and services
var giltApp = angular.module('giltApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/isotope/',{
        templateUrl:'views/isotope.html', 
        controller:'IsotopeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
