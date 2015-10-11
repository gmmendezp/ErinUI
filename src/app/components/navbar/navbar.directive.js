(function() {
  'use strict';

  angular
    .module('test')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($location, $scope, $cookies, moment) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();

      if ($cookies.get("user")) {
        $scope.loginMessage = "Logout";
      }

      $scope.logout=function(){
        $cookies.remove("user");

        $location.path("/");
      }
    }
  }

})();
