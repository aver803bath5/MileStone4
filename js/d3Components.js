angular.module('d3Components', [])

	.controller('fieldViewController', function($scope) {
		$scope.myData = [10,20,30,40,60, 80, 20, 50];
	}) 
	
	.directive('field', function($parse) {
		var directiveDefinitionObject = {
			restrict: 'E',
			replace: false,
			scope: {data: '=chartData'},
			link: function(scope, element, attrs) {
				var chart = d3.select(element[0]);
				
				chart.append("div").attr("class", "chart")
				.selectAll('div')
				.data(scope.data).enter().append("div")
				.style("width", function(d) {
					return d + "%";
				})
				.text(function(d) {
					return d + "%";
				});
			}
		};
		return directiveDefinitionObject;
	})
