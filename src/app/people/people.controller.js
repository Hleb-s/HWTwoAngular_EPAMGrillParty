(function() {
  'use strict';

  angular
    .module('hwtwoAngularEpamgrillParty')
    .controller('PeopleController', PeopleController);

  /** @ngInject */
    function PeopleController($scope,$log, webDevTec) {
    var vm = this;

    activatePeople();

    function activatePeople() {
    vm.peopleList = webDevTec.getTec();
    $log.debug(111, vm.peopleList);    
    }
  }
})();