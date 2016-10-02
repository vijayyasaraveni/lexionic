var app = angular.module('starter.controllers');

app.controller('createTripController', function($scope, $state, $location, $ionicLoading, routeListService, ionicDatePicker, tripFactory){
  
  $scope.input = tripFactory;

    console.log("inside createTripController :::::: "+JSON.stringify($scope.input));

  // $scope.nextButtonClick = function(){

  //   alert("i am here");

  //   console.log("selected value :::::::: "+$scope.data.selectedRoute.RouteId);

  //   $state.go('selectVehicle', {'RouteId': $scope.data.selectedRoute.RouteId});
  // }
  
})

.controller('liveTripsController', function($scope, $state, $location){
  $scope.tripDetails = function(){
    $state.go('tripDetails');
  }
})

.controller('tripDetailsController', function($state, $location, $scope){
  $scope.createTrip = function(){
    $state.go('home');
  }
});