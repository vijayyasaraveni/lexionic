angular.module('starter.controllers', [])


.controller('loginController', function($scope, $state,  $location){

    $scope.loginAction = function(){
        $state.go('home');
    }

})

.controller('homePageController', function($scope, $state,  $location){
  
  $scope.create = function(){
    $state.go('createTrip');
  }
  
  $scope.recieveDevices = function(){
    $state.go('recieveDevices');
  }
  
  $scope.liveTrips = function(){
    $state.go('liveTrips');
  }
  
  $scope.manageDevices = function(){
    $state.go('browseDevices');
  }
  
  $scope.browseRoutes = function(){
    $state.go('browseRoutes');
  }
  
  $scope.browseVehicles = function(){
    $state.go('browseVehicles');
  }
  
  
});