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
      var videoController  = this;
      if (videoController.user1 && videoController.user2 && videoController.mediator && videoController.data) {
        var userMap = {};
        userMap[videoController.user1['id']] = videoController.user1;
        userMap[videoController.user2['id']] = videoController.user2;
        userMap[videoController.mediator['id']] = videoController.mediator;

        console.log(videoController);
        $scope.init = function(){
          console.log(videoController);
          $scope.url = "https://g2m.me/" + videoController.data;
        };

      }




    }
  }

})();


