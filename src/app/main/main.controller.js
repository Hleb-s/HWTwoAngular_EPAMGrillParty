(function() {
  'use strict';

  angular
    .module('hwtwoAngularEpamgrillParty')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';

    activate();

    function activate() {

    }
  }
})();
