(function() {
  'use strict';

  angular
    .module('test')
    .directive('videocall', videocall);

  /** @ngInject */
  function videocall() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/videocall/videocall.html',
      scope: {
        data: '=',
        user1: "=user1",
        user2: "=user2",
        mediator: "=mediator"
      },
      controller: VideocallController,
      controllerAs: 'videoController',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function VideocallController($scope) {
      var vm  = this;
      console.log(vm.user1);
      if (vm.user1 && vm.user2 && vm.mediator && vm.data) {
        console.log("lol");
        var userMap = {};
        userMap[vm.user1['id']] = vm.user1;
        userMap[vm.user2['id']] = vm.user2;
        userMap[vm.mediator['id']] = vm.mediator;
        $scope.userMap = userMap;
        console.log("x ",$scope.userMap);


      }

      $scope.init = function(){
        console.log(vm);
        $scope.url = "https://g2m.me/" + vm.data;
      };



    }
  }

})();


