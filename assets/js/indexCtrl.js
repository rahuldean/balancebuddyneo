angular.module('bbApp')
.controller('indexCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.message = "index"
    $http.get('assets/raw/data.json')
    .then(function(data){
      console.log(data);
    }, function (err) {
        console.log(err)
    })
}])