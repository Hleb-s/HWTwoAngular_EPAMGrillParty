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
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'homeContr'
      })
      .state('register', {
        url: '/',
        templateUrl: 'app/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'regContr'
      })
      .state('people', {
        url: '/',
        templateUrl: 'app/people/people.html',
        controller: 'PeopleController',
        controllerAs: 'peopleContr'
      })
      .state('api', {
        url: '/',
        templateUrl: 'app/api/api.html',
        controller: 'APIController',
        controllerAs: 'apiContr'
      })

    $urlRouterProvider.otherwise('/');
  }

})();
