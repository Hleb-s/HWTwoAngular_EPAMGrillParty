(function() {
  'use strict';

  angular
      .module('hwtwoAngularEpamgrillParty')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'title': 'AngularJS',
        'url': 'www.mail.ru',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      }
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
