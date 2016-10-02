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
  
  
})

.controller('contractListController', function($scope, $state, $location, $ionicLoading, contractListService, $ionicHistory, tripFactory){

    console.log("i am here");

    $scope.input = tripFactory;

  $scope.contracts = [];
  $scope.contractsCount = 0;
  $scope.data = {
    selectedContract: ''
  };
  loadRemoteData();


  function loadRemoteData() {
                    // The friendService returns a promise.
                    $ionicLoading.show();

                    var millisecondsToWait = 2000;
                    setTimeout(function() {
                        
                        contractListService.getContractList().then(
                            function( response ) {
                              console.log("response from >>> "+response);
                                applyRemoteData( response );
                                $ionicLoading.hide();
                            });


                    }, millisecondsToWait);

                    
                }

  function applyRemoteData( response ) {

      // $scope.contractsCount = response.contracts;
      $scope.contracts = response.contracts;
}

$scope.selectContractAction = function(){

  $scope.input.contract.contractId = $scope.data.selectedContract.contractId;
  $scope.input.contract.contractName = $scope.data.selectedContract.contractName;

  console.log("input value :::::::: "+JSON.stringify($scope.input));

  $ionicHistory.goBack();
}

});