'use strict';

var app = angular.module('paySafeApp', []);
	
app.controller('PaySafeController', ['$scope','$http', '$location', function ($scope, $http, $location) {
	
	
	$scope.pay = function() {
		var senderNumber = $scope.senderNumber;
		var receiverNumber = $scope.receiverNumber;
		var amount = $scope.amount;
		 $http.get('/dashboard/sendMessage',{
			 params: {senderNumber, receiverNumber, amount}
		 })
		 .then(function (response) {
			 if (response.status == 200) {
			 } else {
				 
			 }
		 });
	}
	
}]);