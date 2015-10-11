(function () {
  'use strict';

  angular
    .module('test')
    .directive('answer', answer);

  /** @ngInject */
  function answer() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/forms/answer/answer.html',
      scope: {
        data: "=",
        user1: "=user1",
        user2: "=user2",
        mediator: "=mediator"
      },
      controller: AnswerController,
      controllerAs: 'answer',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function AnswerController($scope, $cookies, $location) {
      var userCookie = $cookies.get("user");
      if(userCookie){
        var user = JSON.parse(userCookie);
      }else{
        $location.path("/");
      }

      var vm = this;
      console.log("ANSWERANSWER");

      if (vm.user1 && vm.user2 && vm.mediator && vm.data) {
        var userMap = {};
        userMap[vm.user1['id']] = vm.user1;
        userMap[vm.user2['id']] = vm.user2;
        userMap[vm.mediator['id']] = vm.mediator;

        $scope.userMap = userMap;
        $scope.urlImage = "http://cdn.iwillteachyoutoberich.com/wp-content/uploads/2008/11/generic-candy.jpg";
        $scope.text = vm.data.answer;
        $scope.userId = vm.data.userId;
        $scope.timestamp = moment(vm.data.timestamp).fromNow();
      }
    }
  }

})();
