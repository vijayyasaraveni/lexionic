var app = angular.module('starter.controllers');

app.controller('vehicleListController', function($scope, $state, $location,$http, $ionicLoading, $stateParams, vehicleService, tripFactory, $ionicHistory){
  
  $scope.input = tripFactory;

  console.log("inside vehicleListController ::::: "+JSON.stringify($scope.input));

  $scope.vehicles = [];
  $scope.vehiclesCount = 0;
  $scope.vehicleListEmpty = false;

  $scope.data = {
    selectedVehicle: null
  }

   getVehicleList();

  function getVehicleList() {
    $ionicLoading.show();
    vehicleService.getVehicleList().then(
      function( response ) {
          console.log("response from >>> "+response);
          applyRemoteVehicleList(response);
          $ionicLoading.hide();
      });
    
  }
  
  function applyRemoteVehicleList(response){
      $scope.vehicles = response.Vechicles;

      if($scope.vehicles.length > 0){
        $scope.vehicleListEmpty = true;
      }else{
        $scope.vehicleListEmpty = false;
      }

      // $scope.vehiclesCount = $scope.vehicles.length;
  }
  
  $scope.selectVehicleButtonAction = function(){
    
    $scope.input.vehicle = $scope.data.selectedVehicle;

    console.log("done button action :::::: "+JSON.stringify($scope.input));

    $ionicHistory.goBack();

  }


  $scope.addVehicle = function(){

    console.log("selected Vehicle :::::::: "+$scope.data.selectedVehicle.VehicleId);

    $state.go('deviceList', {'routeId': $stateParams.RouteId, 'vehicleId': $scope.data.selectedVehicle.VehicleId});

    //$state.go('addVehicle');
  }
  
})

.controller('browseVehiclesController', function($state, $scope, $location, $ionicLoading, vehicleService){
  
  $scope.vehicles = [];
  $scope.vehiclesCount = 0;

  getVehicleList();

  function getVehicleList() {
    $ionicLoading.show();
    vehicleService.getVehicleList().then(
      function( response ) {
          console.log("response from >>> "+response);
          applyRemoteVehicleList(response);
          $ionicLoading.hide();
      });
  }
  
  function applyRemoteVehicleList(response){
      $scope.vehicles = response.Vechicles;
  }


  $scope.addVehicle = function(){
    $state.go('addVehicle');
  }


})

.controller('addVehicleController', function($scope, $state, $location){
  $scope.addVehicle = function(){
      $state.go('deviceList');
  }
});