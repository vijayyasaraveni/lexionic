var app = angular.module('starter.controllers');

app.controller('browseRoutesController', function($state, $location, $scope, $http){
  
   var req = {
    method: 'POST',
    url: 'http://myplug.in/lex2/api.php?action=RoutesList',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {  }
}

$http(req).then(function(response){
  // success func
  
    console.log(JSON.stringify(response));
    alert('success');
  
}
, function(response){
  alert('failed');
  
});
  
})

.controller('routeListController', function($scope, $state, $location, $ionicLoading, routeListService, tripFactory, $ionicHistory){

  $scope.input = tripFactory;

  console.log("inside routeListController  ::::::: "+JSON.stringify($scope.input));

  $scope.routes = [];
  $scope.routesCount = 0;
  $scope.data = {
    selectedRoute: ''
  };
  loadRemoteData();


  function loadRemoteData() {
                    // The friendService returns a promise.
                    $ionicLoading.show();
                    routeListService.getRouteList().then(
                            function( response ) {
                              console.log("response from >>> "+response);
                                applyRemoteData( response );
                                $ionicLoading.hide();
                            });
                }

  function applyRemoteData( response ) {

      $scope.routesCount = response.RoutesCount;
      $scope.routes = response.Routes;
}


$scope.selectRouteButtonAction = function(){

  $scope.input.route = $scope.data.selectedRoute;

  console.log("inside done button  ::::::: "+JSON.stringify($scope.input));

  $ionicHistory.goBack();

}


});