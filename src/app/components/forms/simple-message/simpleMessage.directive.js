(function () {

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
        data: "=",
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
    function SimpleMessageController($scope, moment) {
      var vm = this;

      if (vm.user1 && vm.user2 && vm.mediator && vm.data) {
        var userMap = {};
        userMap[vm.user1['id']] = vm.user1;
        userMap[vm.user2['id']] = vm.user2;
        userMap[vm.mediator['id']] = vm.mediator;

        $scope.userMap = userMap;
        $scope.name = "Cesar";
        $scope.urlImage = "http://cdn.iwillteachyoutoberich.com/wp-content/uploads/2008/11/generic-candy.jpg";
        $scope.text = vm.data.value;
        $scope.userId = vm.data.userId;
        $scope.timestamp = moment(vm.data.timestamp).fromNow();
      }
    }
  }

})();
