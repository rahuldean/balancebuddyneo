angular.module('bbApp')
.controller('indexCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.message = "index"
    $scope.data = []

    $http.get('assets/raw/data.json')
    .then(function(resp){
        $scope.data = resp.data || []
        $scope.country = $scope.data.countries_states[0]
        $scope.state = $scope.data.countries_states[0].states[0]
        $scope.carrier = $scope.data.carriers[0]
        
    }, function (err) {
        console.log(err)
    })

    $scope.countryChanged = function() {
        $scope.data.countries_states.filter(function(val) {
            return val.country_id === $scope.country.country_id
        })
        $scope.state = $scope.data.countries_states.find(x=> x.country_id === $scope.country.country_id).states[0]
    }

    $scope.getFilteredCountriesStates = function (countries_states) {
        return countries_states.country_id == $scope.country.country_id
    }

    $scope.codeFilter = function (code) {
        return $.inArray(parseInt($scope.carrier.carrier_id), code.carriers) > -1 &&
                $.inArray(parseInt($scope.state.state_id), code.states) > -1 
    }

    $scope.encode = function (code) {
       return 'tel:' + code.replace('#', '%23')
    }
}])