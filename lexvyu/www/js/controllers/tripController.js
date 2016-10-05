var app = angular.module('starter.controllers');

app.controller('createTripController', function($scope, $state, $location, $ionicLoading, routeListService, ionicDatePicker, tripFactory){
  
  $scope.input = tripFactory;

    console.log("inside createTripController :::::: "+JSON.stringify($scope.input));

    $scope.showDatePicker = function(){

      var options = {
          date: new Date(),
          mode: 'date', // or 'time'
          minDate: new Date() - 10000,
          allowOldDates: true,
          allowFutureDates: false,
          doneButtonLabel: 'DONE',
          doneButtonColor: '#F2F3F4',
          cancelButtonLabel: 'CANCEL',
          cancelButtonColor: '#000000'
       };

       $cordovaDatePicker.show(options).then(function(date){
          alert(date);
       });

    }

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

.controller('tripDetailsController', function($state, $location, $scope, $ionicLoading, tripService, tripFactory){
  

   $scope.input = tripFactory;

  console.log("inside deviceListController :::::::: "+JSON.stringify($scope.input));


  $scope.tripDetails = {};
  $scope.deviceCount = 0;
  $scope.deviceListEmpty = false;

  $scope.data = {
    selectedDevice: null
  }

  getTripDetails();

  function getTripDetails() {
    $ionicLoading.show();
    tripService.getTripDetails().then(
      function( response ) {
          console.log("response from >>> "+response);
          applyRemoteDeviceList(response);
          $ionicLoading.hide();
      });
  }

function applyRemoteDeviceList(response){
      $scope.tripDetails = response.TripDetails[0];

      // if($scope.devices.length > 0){
      //   $scope.deviceListEmpty = true;
      // }else{
      //   $scope.deviceListEmpty = false;
      // }
  }



});