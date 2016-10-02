var app = angular.module('starter.services');

app.service('contractListService', function($http, $q){
    return({
        getContractList: getContractList
    });

    function getContractList() {
        var request = {
            method: 'GET',
            url: 'js/JSON/contractList.json',
            headers: {
            'Content-Type': 'application/json'
            },
            data: {  }
        }
        return( $http(request).then( handleSuccess, handleError ) );
    }

    function handleError( response ) {
        if (
            ! angular.isObject( response.data ) ||
            ! response.data.message
            ) {
            return( $q.reject( "An unknown error occurred." ) );
        }
        // Otherwise, use expected error message.
        return( $q.reject( response.data.message ) );
    }
    function handleSuccess( response ) {

        console.log("inside success :::::: "+JSON.stringify(response));

        var responseString = JSON.stringify(response);
        return( response.data );
    }


});