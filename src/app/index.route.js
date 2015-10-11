(function() {
  'use strict';

  angular
    .module('test')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/conflict', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/',  {
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/login'
      });
  }

})();
