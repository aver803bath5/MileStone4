angular.module('MyFarmBot', ['ngRoute', 'pansComponents', 'd3Components'])

.controller('MainController', function($scope) {
 })

.controller('LoginAndRegister', function($scope) {
})

.controller('ManageMachine', function($scope) {
})

.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/matchMachine.html',
    controller: 'MainController'
  });

  $routeProvider
  .when('/login', {
    templateUrl: '/login.html',
    controller: 'LoginAndRegister'
  });

  $routeProvider
  .when('/manageMachine', {
    templateUrl: '/manageMachine.html',
    controller: 'ManageMachine'
  });

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
});
