(function () {
  'use strict';

  angular
    .module('test')
    .controller('ConflictRegistration', ConflictRegistration);

  /** @ngInject */
  function ConflictRegistration($scope, $cookies, $location, $http) {
    var vm = this;

    if ($cookies.get("user")) {


    } else {
      $location.path('/');
    }
  }

})();
