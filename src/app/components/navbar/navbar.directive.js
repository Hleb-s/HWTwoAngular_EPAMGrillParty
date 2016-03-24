(function() {
  'use strict';

  angular
    .module('hwtwoAngularEpamgrillParty')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar($state) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      bindToController: true,
        link: function (scope) {                      
            scope.homeOpen = function home() {
                scope.active='home';
                $state.go('home');
            }
                        
            scope.peopleOpen = function peopleOpen() {
                scope.active='people';
                $state.go('people');
            }
            
            scope.registerOpen = function register() {
                scope.active='register';
                $state.go('register');
            }
        }
    };

    return directive;
  }

})();
