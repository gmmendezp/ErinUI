(function () {
  'use strict';

  angular
    .module('test')
    .controller('ConflictRegistration', ConflictRegistration);

  /** @ngInject */
  function ConflictRegistration($scope, $cookies, $location, $http) {
    var vm = this;

    var userCookie = $cookies.get("user");
    if (userCookie) {
      $scope.user = JSON.parse(userCookie);
    } else {
      $location.path('/');
    }

    $scope.registerConflict = function(){
      $location.path("/conflict");
    }
  }
})();
