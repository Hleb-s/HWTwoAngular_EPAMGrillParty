(function() {
  'use strict';

  angular
    .module('hwtwoAngularEpamgrillParty')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
    function RegisterController($log, $scope, $state, employees, webDevTec) {
    var vm = this;
    activate();

    function activate() {
        vm.dataItem = defaultData();
        function defaultData() {
            return {
            firstname: '',
            lastname: '',
            sex:'',
            email: '',
            fotourl:'',
            iswill: '',
            notalone: false,
            nameguest:''
            };
        }
        vm.statusList = getStatus();

        function getStatus() {
            return [{id: '1', name: 'Yes'}, {id: '2', name: 'No'}, {id: '3', name: 'Maybe'}];
        }
        
        vm.changeFirstName = function () {
            findEpamerEmployees(vm.dataItem.firstname, "firstname");
        };

        vm.changeLastName = function () {
            findEpamerEmployees(vm.dataItem.lastname, "lastname");
        };

        vm.changeEmail = function () {
            findEpamerEmployees(vm.dataItem.email, "email");
        };
        
        function findEpamerEmployees(param, item) {
            vm.regError = '';
            var found = null;

            var epamEmployees = employees.getEmployees();
            
            if (item == 'firstname') {
                found = epamEmployees.filter( function(itemArray){ return itemArray.firstname === param; } );
            } 
            else 
            if (item == 'lastname') {
                found = epamEmployees.filter( function(itemArray){ return itemArray.lastname === param; } );
            } 
            else 
            if (item == 'email') {
                found = epamEmployees.filter( function(itemArray){ return itemArray.email === param; } );
            }
            
            if(found.length <= 0){
                vm.regError = 'The list of employees EPAM employee was not found';
            } else
            {
                vm.dataItem.firstname = found[0].firstname;
                vm.dataItem.lastname = found[0].lastname;
                vm.dataItem.email = found[0].email;
                vm.dataItem.sex = found[0].sex;
            }
        }        
      
        vm.regPage = function () {
            if (vm.dataItem.$invalid) {
            return;
            }
        
            var employee = validatedataItem();
            if (employee == null) return;

        var newdata = {       
                id: '',
                idemployees: '',
                iswill: '',
                notalone:'',
                nameguest:''
            }
            newdata.idemployees = employee[0].id;
            newdata.iswill = vm.dataItem.iswill;
            newdata.notalone = vm.dataItem.notalone;
            newdata.nameguest = vm.dataItem.nameguest;
            webDevTec.addIteninArray(newdata);
            $scope.peopleOpen();
        };
        
        function validatedataItem() {
            vm.regError = '';
            var found = null;
            var participantsFound = null;
            var employeesArray = employees.getEmployees();
            found = employeesArray.filter( function(employee){
                 return vm.dataItem.firstname === employee.firstname &&
                    vm.dataItem.lastname === employee.lastname &&
                    vm.dataItem.email === employee.email; 
                });
            if (found == null) {
                vm.regError = 'The list of employees EPAM employee was not found';
                return found;
            }
             
            var participants = webDevTec.getTecLite();
            participantsFound = participants.filter( function(participant){
                 return participant.idemployees === found[0].id; 
                });

            if (participantsFound != null && participantsFound.length > 0) {
                vm.regError = 'This Email is already registered';
                return found = null;
            }  
            
            return found;
        }

    }
  }
})();