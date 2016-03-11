(function() {
  'use strict';

  angular
    .module('hwtwoAngularEpamgrillParty')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar($state, $log) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      
    link: function (scope, element, attrs) {
      scope.register = function register() {
        $state.go('register');
      }
    },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      var vm = this;

    }
    
    
  }

})();
