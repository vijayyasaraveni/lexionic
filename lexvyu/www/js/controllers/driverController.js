var app = angular.module('starter.controllers');

app.controller('driverListController', function($scope, $state, $location,$http, $ionicLoading, driverService, tripFactory, $ionicHistory){

    $scope.input = tripFactory;

  console.log("inside driverListController ::::: "+JSON.stringify($scope.input));

  $scope.drivers = [];
  $scope.driversCount = 0;
//   $scope.vehicleListEmpty = false;

  $scope.data = {
    selectedDriver: null
  }

   getDriverList();

  function getDriverList() {
    $ionicLoading.show();
    driverService.getDriverList().then(
      function( response ) {
          console.log("response from >>> "+response);
          applyRemoteVehicleList(response);
          $ionicLoading.hide();
      });
    
  }
  
  function applyRemoteVehicleList(response){
      $scope.drivers = response.drivers;
  }


  $scope.selectDriverButtonAction = function(){
    $scope.input.driver = $scope.data.selectedDriver;

    console.log("done button action ::::::: "+JSON.stringify($scope.input));

    $ionicHistory.goBack();

  }


});