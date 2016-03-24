(function() {
  'use strict';

  angular
    .module('hwtwoAngularEpamgrillParty')
    .controller('APIController', APIController);

  /** @ngInject */
  function APIController($http, $log) {
    var vm = this;
    loadingWeather();

    function loadingWeather() {
      $http({
        method: 'GET',
        url: 'https://api.flickr.com/services/rest',
        params: {
            method: 'flickr.photos.search',
            //api_key: '',
            text: 'girl',
            format: 'json',
            nojsoncallback: 1            
        },
      }).then(function successCallback(response) {
          $log.debug(response);
          //http://opogode.ru/api-v1
          //http://www.betravel.ru/iata-city-code.php?country=KZ&city=KGF
          //http://opogode.ua/api/v1/forecasts.json?city=Karaganda
        //vm.error = false;
        //vm.users = vm.users.concat(response.data);
        //lastId = vm.users[vm.users.length - 1].id;
      }, function errorCallback(response) {
        vm.error = true;
      });
    }
  }
})();
