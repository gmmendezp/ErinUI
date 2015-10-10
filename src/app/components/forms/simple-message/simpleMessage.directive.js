(function() {
  'use strict';

  angular
    .module('test')
    .directive('simpleMessage', simpleMessage);

  /** @ngInject */
  function simpleMessage() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/forms/simple-message/simple-message.html',
      scope: {
        data: "=data",
        user1: "=user1",
        user2: "=user2",
        mediator: "=mediator"
      },
      controller: SimpleMessageController,
      controllerAs: 'simpleM',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SimpleMessageController($scope) {
      var vm = this;

      $scope.name = "Cesar";
      $scope.urlImage = "http://cdn.iwillteachyoutoberich.com/wp-content/uploads/2008/11/generic-candy.jpg";
      $scope.text = vm.data['value'];

    }
  }

})();
