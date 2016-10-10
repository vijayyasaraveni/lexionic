var app = angular.module('starter.controllers');

app.controller('createTripController', function($scope, $state, $location, $ionicLoading, routeListService, ionicDatePicker, tripFactory){
  
  $scope.input = tripFactory;

    console.log("inside createTripController :::::: "+JSON.stringify($scope.input));


    $scope.selectedDate1;
    $scope.selectedDate2;

    $scope.openDatePickerOne = function (val) {
      var ipObj1 = {
        callback: function (val) {  //Mandatory
          console.log('Return value from the datepicker popup is : ' + val, new Date(val));
          $scope.selectedDate1 = new Date(val);
        },
        disabledDates: [
          new Date(2016, 2, 16),
          new Date(2015, 3, 16),
          new Date(2015, 4, 16),
          new Date(2015, 5, 16),
          new Date('Wednesday, August 12, 2015'),
          new Date("08-16-2016"),
          new Date(1439676000000)
        ],
        from: new Date(2012, 1, 1),
        to: new Date(2018, 10, 30),
        inputDate: new Date(),
        mondayFirst: true,
        disableWeekdays: [],
        closeOnSelect: false,
        templateType: 'popup'
      };
      ionicDatePicker.openDatePicker(ipObj1);
    };

    $scope.openDatePickerTwo = function (val) {
      var ipObj1 = {
        callback: function (val) {  //Mandatory
          console.log('Return value from the datepicker modal is : ' + val, new Date(val));
          $scope.selectedDate2 = new Date(val);
        },
        disabledDates: [
          new Date(1437719836326),
          new Date(2016, 1, 25),
          new Date(2015, 7, 10),
          new Date('Wednesday, August 12, 2015'),
          new Date("08-14-2015"),
          new Date(1439676000000),
          new Date(1456511400000)
        ],
        from: new Date(2012, 8, 2),
        to: new Date(2018, 8, 25),
        inputDate: new Date(),
        mondayFirst: true,
        disableWeekdays: [0, 6],
        showTodayButton: false,
        closeOnSelect: false,
        templateType: 'popup'
      };
      ionicDatePicker.openDatePicker(ipObj1);
    }






//     var ipObj1 = {
//       callback: function (val) {  //Mandatory
//         console.log('Return value from the datepicker popup is : ' + val, new Date(val));
//       },
//       disabledDates: [            //Optional
//         new Date(2016, 2, 16),
//         new Date(2015, 3, 16),
//         new Date(2015, 4, 16),
//         new Date(2015, 5, 16),
//         new Date('Wednesday, August 12, 2015'),
//         new Date("08-16-2016"),
//         new Date(1439676000000)
//       ],
//       from: new Date(2012, 1, 1), //Optional
//       to: new Date(2016, 10, 30), //Optional
//       inputDate: new Date(),      //Optional
//       mondayFirst: true,          //Optional
//       disableWeekdays: [0],       //Optional
//       closeOnSelect: false,       //Optional
//       templateType: 'popup'       //Optional
//     };


// $scope.openDatePicker = function(){
//       ionicDatePicker.openDatePicker(ipObj1);
//     };

    // $scope.openDatePicker = function(){

    //   var options = {
    //       date: new Date(),
    //       mode: 'date', // or 'time'
    //       minDate: new Date() - 10000,
    //       allowOldDates: true,
    //       allowFutureDates: false,
    //       doneButtonLabel: 'DONE',
    //       doneButtonColor: '#F2F3F4',
    //       cancelButtonLabel: 'CANCEL',
    //       cancelButtonColor: '#000000'
    //    };

    //    $cordovaDatePicker.show(options).then(function(date){
    //       alert(date);
    //    });

    // }

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