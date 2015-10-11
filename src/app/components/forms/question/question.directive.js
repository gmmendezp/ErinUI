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
    function QuestionController($scope) {
      var vm = this;

      if (vm.question) {
        var question = vm.question.structure.metaData;
        console.log(question);
        $scope.schema = question.schema;
        question.form[0]['onChange'] = function () {
          var valueToSave = $scope.model;
          valueToSave['question'] = question.schema.properties.answer.title;
        };
        $scope.form = question.form;

        $scope.model = {};
      }
    }
  }

})();
