(function() {
  'use strict';

  angular
      .module('hwtwoAngularEpamgrillParty')
      .service('employees', employees);

  function employees() {
    var data = [
      {
        'id': '1',
        'firstname': 'Vasya',
        'lastname': 'Pupkin',
        'sex': '1',
        'email': 'VasyaPupkin@epam.com',
        'fotourl': ''
      },
      {
        'id': '2',
        'firstname': 'Oksana',
        'lastname': 'Morozova',
        'sex': '0',
        'email': 'Morozova_Oksana@epam.com',
        'fotourl': '/assets/PhotoPersons/user1.png'
      },
      {
        'id': '3',
        'firstname': 'Polina',
        'lastname': 'Grishina',
        'sex': '0',
        'email': 'Grishina_Polina@epam.com',
        'fotourl': '/assets/PhotoPersons/user7.png'
      },
      {
        'id': '4',
        'firstname': 'Pavel',
        'lastname': 'Stadnev',
        'sex': '1',
        'email': 'Stadnev_Pavel@epam.com',
        'fotourl': '/assets/PhotoPersons/user3.png'
      },
      {
        'id': '5',
        'firstname': 'Ekaterina',
        'lastname': 'Petrova',
        'sex': '0',
        'email': 'Petrova_Ecaterina@epam.com',
        'fotourl': '/assets/PhotoPersons/user2.png'
      },
      {
        'id': '5',
        'firstname': 'Igor',
        'lastname': 'Emelin',
        'sex': '1',
        'email': 'emelin_Igor@epam.com',
        'fotourl': '/assets/PhotoPersons/user3.png'
      }
    ];

    this.getEmployees = getEmployees;
    this.GetEmployeesforId = GetEmployeesforId;

    function getEmployees() {
      return angular.fromJson(data) || [];
    }
    
    function GetEmployeesforId(id) {
        return angular.fromJson(data.filter( function(itemArray){ return itemArray.id === id; } )) || [];
    }
  }

})();
