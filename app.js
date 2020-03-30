var app = angular
			.module("myApp",[]);
			
app.controller("myController", function myController($scope) {
    $scope.message = "I am In Controller"
    
});