(function() {
  'use strict';
  angular
    .module('hwtwoAngularEpamgrillParty')
    .controller('PeopleController', PeopleController);

  /** @ngInject */
    function PeopleController($scope, $log, $filter, webDevTec) {
    var vm = this;
    vm.clearList = clearList;
    vm.createList = createList;
    vm.peopleList = webDevTec.getTec();
    var orderBy = $filter('orderBy');
    vm.orderby = orderby;
    vm.oneAtATime = true;
    $scope.status = {
        isopen: false,
        nameitem: 'Name ↓'
    };
    

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
    function orderby(val) {
        vm.predicate = val;
        vm.peopleList = orderBy(vm.peopleList, val);
    }
    vm.orderby('employees.firstname');
  }
})();