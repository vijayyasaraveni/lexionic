var app = angular.module('starter.controllers');

app.controller('deviceListController', function($state, $http, $ionicLoading, $location, $scope, deviceService, tripFactory, $ionicHistory){
  
  // console.log("routeId :"+$stateParams.routeId);
  // console.log("vehicleId :"+$stateParams.vehicleId);

  $scope.input = tripFactory;

  console.log("inside deviceListController :::::::: "+JSON.stringify($scope.input));


  $scope.devices = [];
  $scope.deviceCount = 0;
  $scope.deviceListEmpty = false;

  $scope.data = {
    selectedDevice: null
  }

  getDeviceList();

  function getDeviceList() {
    $ionicLoading.show();
    deviceService.getDeviceList().then(
      function( response ) {
          console.log("response from >>> "+response);
          applyRemoteDeviceList(response);
          $ionicLoading.hide();
      });
  }

function applyRemoteDeviceList(response){
      $scope.devices = response.Devices;

      // if($scope.devices.length > 0){
      //   $scope.deviceListEmpty = true;
      // }else{
      //   $scope.deviceListEmpty = false;
      // }
  }


  $scope.selectDeviceAction = function(){
    $scope.input.device = $scope.data.selectedDevice;

    $ionicHistory.goBack();

  }

  
  $scope.nextButtonClick = function(){
    $state.go('tripDetails');
  }
})

.controller('recieveDevicesController', function($scope, $state, $location){
  $scope.recieveDevices = function(){
    $state.go('home');
  }
})

.controller('browseDevicesController', function($state, $location, $scope, deviceService, $ionicLoading){

    $scope.devices = [];
  $scope.deviceCount = 0;
  $scope.deviceListEmpty = false;


  getDeviceList();

  function getDeviceList() {
    $ionicLoading.show();
    deviceService.getDeviceList().then(
      function( response ) {
          console.log("response from >>> "+response);
          applyRemoteDeviceList(response);
          $ionicLoading.hide();
      });
  }

function applyRemoteDeviceList(response){
      $scope.devices = response.Devices;
  }

});