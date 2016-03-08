'use strict';

angular.module('registerModule', [])
  .directive('register', reg);

function reg($state) {
  return {
    templateUrl: 'app/components/register/register.html',
    link: function (scope) {
      scope.regData = defaultReg();
      function defaultReg() {
        return {
          firstName: '',
          lastName: '',
          email: '',
          status: '',
          bringGuest: false,
          guestName: ''
        };
      }

      scope.home = function () {
        $state.go('home');
      };
    }
  };
}