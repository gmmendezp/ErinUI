(function () {
  'use strict';

  angular
    .module('test')
    .controller('FormController', FormController);

  /** @ngInject */
  function FormController($scope) {

    var model = {
      type: "",
      question: "¿Mi pregunta?",
    };
    var question = radioquestion;
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
})();
