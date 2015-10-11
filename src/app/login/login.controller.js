(function () {
  'use strict';

  angular
    .module('test')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope, $cookies, $location, $http) {
    var vm = this;

    if ($cookies.get("user")) {

      $location.path('/conflict');

    } else {

      $scope.submit = function () {

        $http({
          method: 'GET',
          url: 'http://54.152.29.242:8080/erin/user/login?email=' + $scope.username
        }).then(function successCallback(response) {

          var user = response.data;

          if (user) {
            var userString = JSON.stringify(response.data);
            $cookies.put('user', userString);
            $location.path('/conflict');
          }else{
            alert("Wrong username and password combination.")
          }

        }, function errorCallback(response) {
        });

      }

    }

  }

})();
