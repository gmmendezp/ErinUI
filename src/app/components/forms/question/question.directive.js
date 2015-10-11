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
        "question": "=question"
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
        var model = $scope.model;
        if (typeof(model) === "string") {
          model = [model];
        }
        var valueToSave = model;
        valueToSave.question = vm.question.id;
        valueToSave.user = user.id;
        erinWebsocket.send(valueToSave, "/Input/Components/" + $scope.conflictId + "/answer");
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
