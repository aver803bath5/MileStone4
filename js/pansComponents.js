angular.module('pansComponents', [])
 
	.directive('tabs', function() {
		return {
			restrict: 'E',
			transclude: true,
			scope: {},
			controller: function($scope, $element) {
				var panes = $scope.panes = [];
     
				$scope.select = function(pane) {
					angular.forEach(panes, function(pane) {
							pane.selected = false;
					});
					pane.selected = true;
				}
				       
				this.addPane = function(pane) {
					if (panes.length == 0) $scope.select(pane);
					panes.push(pane);
				}
			},
			template: '<div class="tabbable">' +
					'<ul class="nav nav-tabs">' +
						'<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">'+
							'<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
						'</li>' +
					'</ul>' +
					'<div class="tab-content" ng-transclude></div>' +
				'</div>',
			replace: true
		};
	})

	.directive('pane', function() {
		return {
			require: '^tabs',
			restrict: 'E',
			transclude: true,
			scope: { title: '@' },
			link: function(scope, element, attrs, tabsController) {
				tabsController.addPane(scope);
			},
			template:
				'<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
				'</div>',
			replace: true
		};
	})

	.directive('tabsmanagement', function() {
		return {
			restrict: 'E',
			transclude: true,
			scope: {},
			controller: function($scope, $element) {
				var panes = $scope.panes = [];
     
				$scope.select = function(pane) {
					angular.forEach(panes, function(pane) {
							pane.selected = false;
					});
					pane.selected = true;
				}
				       
				this.addPane = function(pane) {
					if (panes.length == 0) $scope.select(pane);
					panes.push(pane);
				}
			},
			template: '<div class="tabbable">' +
					'<nav class="navbar navbar-inverse managementNavbar">' +
					'<div class="container-fluid">' +
					'<ul class="nav nav-pills navbar-inverse nav-justified">' +
						'<li class="navbar-btn"><h1>自動種植機</h1></li>' +
						'<li ng-repeat="pane in panes" class="navbar-btn" ng-class="{active:pane.selected}">'+
							'<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
						'</li>' +
					'</ul>' +
					'</div>' +
					'</nav>' +
					'<div class="tab-content" ng-transclude></div>' +
				'</div>',
			replace: true
		};
	})

	.directive('panemanagement', function() {
		return {
			require: '^tabsmanagement',
			restrict: 'E',
			transclude: true,
			scope: { title: '@' },
			link: function(scope, element, attrs, tabsmanagementController) {
				tabsmanagementController.addPane(scope);
			},
			template:
				'<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
				'</div>',
			replace: true
		};
	})

