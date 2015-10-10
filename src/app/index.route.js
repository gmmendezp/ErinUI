(function() {
  'use strict';

  angular
    .module('test')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/form', {
        templateUrl: 'app/form/form.html',
        controller: 'FormController',
        controllerAs: 'form'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
