angular.module('bbApp')
.controller('indexCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.message = "index"
    $scope.data = []

    $http.get('assets/raw/data.json')
    .then(function(resp){
        $scope.data = resp.data || []
        $scope.carrier = $scope.data.carriers[0]
        $scope.state = $scope.data.countries_states[0].states[0]
    }, function (err) {
        console.log(err)
    })

    $scope.codeFilter = function (code) {
        return $.inArray(parseInt($scope.carrier.carrier_id), code.carriers) > -1 &&
                $.inArray(parseInt($scope.state.state_id), code.states) > -1 
    }

    $scope.encode = function (code) {
       return code.replace('#', '%23')
    }
}])