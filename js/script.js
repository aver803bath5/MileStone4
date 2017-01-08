angular.module('myFarmBot', ['ngRoute'])

.controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 })

 .controller('MatchMachine', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 })

.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'machineMachine.html',
    controller: 'MainController'
  });

  $routeProvider
  .when('/MatachMachine', {
    templateUrl: 'machineMachine.html',
    controller: 'MatchMachine'
  });

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
});