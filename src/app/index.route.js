(function() {
  'use strict';

  angular
    .module('hwtwoAngularEpamgrillParty')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('register', {
      url:"/",
      template:'<register/>'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
