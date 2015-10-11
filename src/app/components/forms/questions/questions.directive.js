(function () {
  'use strict';


  angular
    .module('test')
    .controller('QuestionsController', QuestionsController);
  /** @ngInject */
  function QuestionsController($scope, $http, $modalInstance) {
    $scope.step = 1;
    $scope.init = function () {
      $http({
        method: 'GET',
        url: 'http://54.152.26.54:8080/erin/component/metadata'
      }).then(function successCallback(response) {
        $scope.questions = response.data;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    };

    $scope.next = function (question) {
      $scope.step++;
      $scope.title = "";
      $scope.question = question;
      $scope.options = [{id: 0, value: ""}];
      var inputEnum = question.metaData.schema.properties.answer.enum;
      $scope.hasOptions = inputEnum && inputEnum.length == 0;
      $scope.newOption = function () {
        $scope.options.push({id: $scope.options.length, value: ""});
      };
    };

    $scope.back = function (question) {
      $scope.step--;
    };

    $scope.ok = function () {
      var options = [];
      $scope.options.forEach(function(option){
            this.push(option["value"]);
      }, options);
      $scope.question.metaData.schema.properties.answer.title = $scope.title;
      $scope.question.metaData.schema.properties.answer.enum = options;
      $modalInstance.close($scope.question);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }
})();
