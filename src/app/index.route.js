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
      .when('/',  {
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .when('/conflict-registration', {
        templateUrl: 'app/conflict-registration/conflict-registration.html',
        controller: 'ConflictRegistrationController',
        controllerAs: 'conflict-registration'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
