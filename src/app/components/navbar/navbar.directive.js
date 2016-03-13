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
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true,
        link: function (scope) {
            scope.register = function register() {
                $state.go('register');
            }
            
             scope.peopleOpen = function register() {
                $state.go('people');
            }
        }
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      //var vm = this;

    }
    
    
  }

})();
