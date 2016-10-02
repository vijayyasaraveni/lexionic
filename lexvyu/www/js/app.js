// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter',  ['ionic', 'starter.controllers', 'ui.router', 'starter.services', 'starter.factory', 'ionic-datepicker'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

   
  
  .state('tripDetails', {
    url : '/tripDetails',
    templateUrl : 'templates/tripDetails.html',
    controller : 'tripDetailsController' 
  })
  
  .state('recieveDevices', {
    url : '/recieveDevices',
    templateUrl : 'templates/recieveDevices.html',
    controller : 'recieveDevicesController'
    
  })
  
  .state('liveTrips', {
    url : '/liveTrips',
    templateUrl : 'templates/liveTrips.html',
    controller : 'liveTripsController'
  })
  
  
  
  
  .state('browseRoutes', {
    url : '/browseRoutes',
    templateUrl : 'templates/browseRoutes.html',
    controller : 'browseRoutesController'
  })
  
  .state('browseVehicles', {
    url : '/browseVehicles',
    templateUrl : 'templates/browseVehicles.html',
    controller : 'browseVehiclesController'
  })
  
  



   .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginController'
  })

  .state('home', {
    url : '/home',
    templateUrl : 'templates/home.html',
    controller: 'homePageController'
  })

  .state('createTrip', {
    url : '/createTrip',
    templateUrl : 'templates/createTrip.html',
    controller: 'createTripController'
  })
  .state('routeList', {
      url: '/routeList',
      templateUrl: 'templates/routeList.html',
      controller: 'routeListController'
  })
  .state('contractList', {
        url: '/contractList',
        templateUrl: 'templates/contractList.html',
        controller: 'contractListController'
  })
  .state('deviceList', {
    url : '/deviceList',
    templateUrl: 'templates/deviceList.html',
    controller: 'deviceListController'
  })
  .state('vehicleList', {
    url : '/vehicleList',
    templateUrl : 'templates/vehicleList.html',
    controller : 'vehicleListController'
  })
  .state('driverList', {
    url : '/driverList',
    templateUrl : 'templates/driverList.html',
    controller : 'driverListController'
  })
  .state('addVehicle', {
    url : '/addVehicle',
    templateUrl: 'templates/addVehicle.html',
    controller : 'addVehicleController'
  })
  .state('browseDevices', {
    url : '/browseDevices',
    templateUrl : 'templates/browseDevices.html',
    controller : 'browseDevicesController'
  });

  $urlRouterProvider.otherwise('/login');

})

.config(function (ionicDatePickerProvider) {
    var datePickerObj = {
      inputDate: new Date(),
      titleLabel: 'Select a Date',
      setLabel: 'Set',
      todayLabel: 'Today',
      closeLabel: 'Close',
      mondayFirst: false,
      weeksList: ["S", "M", "T", "W", "T", "F", "S"],
      monthsList: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
      templateType: 'popup',
      from: new Date(2012, 8, 1),
      to: new Date(2018, 8, 1),
      showTodayButton: true,
      dateFormat: 'dd MMMM yyyy',
      closeOnSelect: false,
      disableWeekdays: []
    };
    ionicDatePickerProvider.configDatePicker(datePickerObj);
  });
