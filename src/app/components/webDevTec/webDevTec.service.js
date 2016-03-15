(function() {
  'use strict';

  angular
      .module('hwtwoAngularEpamgrillParty')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'firstname': 'Vasya',
        'lastname': 'Pupkin',
        'sex': '1',
        'email': 'VasyaPupkin@epam.com',
        'fotourl': '',
        'iswill': '1',
        'notalone':'false',
        'nameguest':''
      },
      {
        'firstname': 'Oksana',
        'lastname': 'Morozova',
        'sex': '0',
        'email': 'Morozova_Oksana@epam.com',
        'fotourl': '/assets/PhotoPersons/user1.png',
        'iswill': '2',
        'notalone':'false',
        'nameguest':''
      },
      {
        'firstname': 'Polina',
        'lastname': 'Grishina',
        'sex': '0',
        'email': 'Grishina_Polina@epam.com',
        'fotourl': '/assets/PhotoPersons/user7.png',
        'iswill': '3',
        'notalone':'false',
        'nameguest':''
      },
      {
        'firstname': 'Pavel',
        'lastname': 'Stadnev',
        'sex': '1',
        'email': 'Stadnev_Pavel@epam.com',
        'fotourl': '/assets/PhotoPersons/user3.png',
        'iswill': '1',
        'notalone':'false',
        'nameguest':''
      },
            {
        'firstname': 'Ekaterina',
        'lastname': 'Petrova',
        'sex': '0',
        'email': 'Petrova_Ecaterina@epam.com',
        'fotourl': '',
        'iswill': '',
        'notalone':'false',
        'nameguest':''
      }
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
