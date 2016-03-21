(function() {
  'use strict';

  angular
    .module('hwtwoAngularEpamgrillParty')
    .controller('PeopleController', PeopleController);

  /** @ngInject */
    function PeopleController($scope,$log, webDevTec) {
    var vm = this;
    vm.clearList = clearList;
    vm.createList = createList;
    
    vm.peopleList = webDevTec.getTec();
    activatePeople();

    function activatePeople() {
   
    }
    
    function clearList() {
        webDevTec.clearData();
        vm.peopleList = webDevTec.getTec();
    }
    
    function createList() {
        webDevTec.createData();
        vm.peopleList = webDevTec.getTec();
    }
  }
})();