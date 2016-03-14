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
      },
      {
        'firstname': 'AngularJS',
        'lastname': 'www.mail.ru',
        'sex': '0',
        'email': 'HTML enhanced for web apps!',
        'fotourl': '/assets/PhotoPersons/user1.png',
        'iswill': '2',
      },
      {
        'firstname': 'AngularJS',
        'lastname': 'www.mail.ru',
        'sex': '0',
        'email': 'HTML enhanced for web apps!',
        'fotourl': '/assets/PhotoPersons/user7.png',
        'iswill': '3',
      },
      {
        'firstname': 'AngularJS',
        'lastname': 'www.mail.ru',
        'sex': '1',
        'email': 'HTML enhanced for web apps!',
        'fotourl': '/assets/PhotoPersons/user3.png',
        'iswill': '1',
      }
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
