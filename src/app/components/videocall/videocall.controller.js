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
        data: '='
      },
      controller: VideocallController,
      controllerAs: 'videoController',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function VideocallController($scope) {
      var videoController  = this;
      console.log(videoController);
      $scope.init = function(){
        console.log(videoController);
        $scope.url = "https://g2m.me/" + videoController.data;
      };



    }
  }

})();


