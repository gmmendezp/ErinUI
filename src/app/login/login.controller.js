(function() {
  'use strict';

  angular
    .module('test')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope, $cookies, $location) {
    var vm = this;
    $scope.submit = function(){;
      $cookies.put('user', $scope.username)
      $location.path('/conflict');
    }

  }
})();
