(function() {
  'use strict';

  angular
    .module('hwtwoAngularEpamgrillParty')
    .controller('PeopleController', PeopleController);

  /** @ngInject */
    function PeopleController($scope,$log, webDevTec) {
    var vm = this;
    vm.peopleList = webDevTec.getTec();
    activatePeople();

    function activatePeople() {
   
    }
  }
})();