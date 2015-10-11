(function() {
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
        "questionId": "=questionId"
      },
      controller: QuestionController,
      controllerAs: 'question',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function QuestionController($scope) {
      var model = {
        type: "",
        question: "¿Mi pregunta?",
      };
      var question = {
        "title": "Si o no",
        "schema": {
          "type": "object",
          "properties": {
            "answer": {
              "title": "",
              "type": "string",
              "enum": [
                "Si",
                "No"
              ]
            }
          }
        },
        "form": [
          {
            "key": "answer",
            "type": "radiobuttons"
          }
        ]
      };
      if("enum" in model) {
        question.schema.properties.answer.enum = model.enum;
      }
      question.schema.properties.answer.title = model.question;
      $scope.schema = question.schema;
      question.form[0]['onChange'] = function () {
        var valueToSave = $scope.model;
        valueToSave['question'] = question.schema.properties.answer.title;
      };
      $scope.form = question.form;

      $scope.model = {};
    }
  }

})();
