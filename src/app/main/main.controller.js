(function() {
  'use strict';

  angular
    .module('hwtwoAngularEpamgrillParty')
    .controller('MainController', MainController);

  /** @ngInject */
  //function MainController($scope, $state, webDevTec, register) {
    function MainController($scope, $state, $log) {
        $log.debug('111111');
    //var vm = this;
            $scope.register = function () {
      $log.debug('22222');
      $state.go('register');
    };

    activate();

    function activate() {

    }
  }
})();
