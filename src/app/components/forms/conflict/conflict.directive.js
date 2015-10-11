(function () {
  'use strict';

  angular
    .module('test')
    .directive('conflict', conflict);

  /** @ngInject */
  function conflict() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/forms/conflict/conflict.html',
      scope: {
        data: '='
      },
      controller: ConflictController,
      controllerAs: 'conflict',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ConflictController($location, $cookies, $scope, $http, $uibModal) {
      var vm = this;
      $scope.autoScrollEnabled = true;

      var userCookie = $cookies.get("user");
      if (userCookie) {
        var user = JSON.parse(userCookie);
      } else {
        $location.path("/");
      }

      $scope.init = function () {

        $http({
          method: 'GET',
          url: 'http://54.152.29.242:8080/erin/conflict/561984c8e4b08d0146a80b62'
        }).then(function successCallback(response) {
          $scope.conflicts = response.data;
          $scope.conflictId = $scope.conflicts.id;
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });

        window.erinWebsocket = createWebSocket(
          'http://54.152.29.242:8080/erin/WebSockets', '/Output/Components',
          function (component) {
            var response = JSON.parse(component.body);
            console.log("Llega Response: ", response);
            $scope.conflicts.components.push(response);
            $scope.message = "";
            $scope.$apply();
          });
        erinWebsocket.connect();

      };

      $scope.openQuestions = function () {

        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'app/components/forms/questions/questions.html',
          controller: 'QuestionsController'
        });

        modalInstance.result.then(function (selectedItem) {
          if (selectedItem) {
            erinWebsocket.send({
              "userId": user.id,
              value: "",
              "structure": selectedItem
            }, "/Input/Components/" + $scope.conflictId + "/Form");
          }
        });
      };

      $scope.sendMessage = function () {
        if ($scope.message) {
          erinWebsocket.send({
            "userId": user.id,
            "value": $scope.message
          }, "/Input/Components/" + $scope.conflictId + "/Message");
        }
      };
      $scope.callMeeting = function () {
        erinWebsocket.send({
          "userId": user.id,
          "type": "CALL"
        }, "/Input/Components/" + $scope.conflictId + "/Call");
      };

    }
  }

})();
