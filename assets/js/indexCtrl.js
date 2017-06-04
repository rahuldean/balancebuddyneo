angular.module('bbApp')
.controller('indexCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.message = "index"
    $scope.data = []

    $http.get('assets/raw/data.json')
    .then(function(resp){
        $scope.data = resp.data || []
        
      console.log(resp.data);
    }, function (err) {
        console.log(err)
    })
}])