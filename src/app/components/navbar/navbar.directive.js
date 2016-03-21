(function() {
  'use strict';

  angular
    .module('hwtwoAngularEpamgrillParty')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar($state, $http) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      bindToController: true,
        link: function (scope) {
            scope.homeOpen = function home() {
                $state.go('home');
            }
            
            scope.registerOpen = function register() {
                $state.go('register');
            }
            
             scope.peopleOpen = function peopleOpen() {
                $state.go('people');
            }
        }
    };

    return directive;
  }

})();
