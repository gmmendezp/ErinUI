(function () {
  'use strict';

  angular
    .module('test')
    .directive('question', question);

  /** @ngInject */
  function question() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/forms/question/question.html',
      scope: {
        "question": "=question",
        "conflict": "=conflict"
      },
      controller: QuestionController,
      controllerAs: 'question',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function QuestionController($scope, $cookies, $location) {

      var userCookie = $cookies.get("user");
      if (userCookie) {
        var user = JSON.parse(userCookie);
      } else {
        $location.path("/");
      }
      var vm = this;
      $scope.submit = function () {
        var model = $scope.model.answer;
        if (typeof model === "string") {
          model = [model];
        }
        var valueToSave = {
          answer : model,
          question : vm.question.id,
          userId : user.id
        };
        erinWebsocket.send(valueToSave, "/Input/Components/" + vm.conflict.id + "/Answer");
      };

      if (vm.question) {
        var question = vm.question.structure.metaData;
        $scope.schema = question.schema;
        $scope.schema.properties.answer.validationMessage = " ";
        $scope.form = question.form;
        $scope.timestamp = moment(vm.question.timestamp).fromNow();
        $scope.model = {};
      }
    }
  }

})();
