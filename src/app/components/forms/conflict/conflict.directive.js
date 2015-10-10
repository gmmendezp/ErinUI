(function() {
  'use strict';

  angular
    .module('test')
    .directive('conflict', conflict);

  /** @ngInject */
  function conflict() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/forms/conflict/conflict.html',
      scope: {
        data: '='
      },
      controller: ConflictController,
      controllerAs: 'conflict',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ConflictController($scope, $http) {
      var vm = this;


      $scope.init = function() {
        $http({
          method: 'GET',
          url: 'http://54.152.26.54:8080/erin/conflict/561984c8e4b08d0146a80b62'
        }).then(function successCallback(response) {
          $scope.conflicts = response.data;
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });

      };

    }
  }

})();
