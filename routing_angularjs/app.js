'use strict';

var sampleApp=angular.module("myApp",['ngRoute']);
sampleApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/AddNewOrder',{
		templateUrl:'templates/add_order.html',
		controller: 'AddOrderController'
		
	}).when('/ShowOrders',{
		templateUrl:'templates/show_orders.html',
		controller: 'ShowOrdersController'
	}).
      otherwise({
        redirectTo: 'templates/add_order.html'
      });
      
}]);

sampleApp.controller('AddOrderController', function($scope) {
     
    $scope.message = "This is Add new order screen";
    
     
});

sampleApp.controller('ShowOrdersController', function($scope) {
 
    $scope.message = "This is Show orders screen";
 
});

