var app = angular.module('starter.factory', [])

.factory('tripFactory', function($rootScope){

    tripDetails = {};
  tripDetails.contract = {
      contractId: '',
      contractName: ''
  };

  tripDetails.route = {
  "RouteId": "",
  "RouteName": "",
  "CustomerId": "",
  "StartLandmarkId": "",
  "EndLandmarkId": "",
  "TAT": "",
  "RadiusInMeters": "",
  "Status": ""
};

tripDetails.device = {
      "0": "",
      "1": "",
      "2": "",
      "3": "",
      "4": "",
      "5": "",
      "6": "",
      "7": "",
      "8": "",
      "9": "",
      "10": "",
      "11": "",
      "12": "",
      "DeviceId": "",
      "ExternalDeviceId": "",
      "DeviceProviderId": "",
      "DeviceTypeId": "",
      "DeviceStatus": "",
      "DeviceRegistration": "",
      "DateOfPurchase": "",
      "Warranty": "",
      "IMEINumber": "",
      "MobileNumber": "",
      "MSPServiceProviderId": "",
      "Status": "",
      "LastCallTime": ""
    };

  tripDetails.vehicle = {
      "0": "",
      "1": "",
      "2": "",
      "3": "",
      "4": "",
      "5": "",
      "6": "",
      "7": "",
      "8": "",
      "9": "",
      "10": "",
      "11": "",
      "12": "",
      "13": "",
      "VehicleId": "",
      "VehicleRegistration": "",
      "VendorId": "",
      "VehicleTypeId": "",
      "Status": "",
      "ContractId": "",
      "VendorName": "",
      "VendorTypeId": "",
      "VendorContactId": "",
      "username": "",
      "password": "",
      "AccId": ""
    };

    tripDetails.driver = {
      "driverId": "",
      "driverName": ""
    };

  tripDetails.lastName = '';  
  return tripDetails;


});