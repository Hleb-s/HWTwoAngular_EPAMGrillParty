(function() {
  'use strict';

  angular
    .module('hwtwoAngularEpamgrillParty')
    .controller('APIController', APIController);

  /** @ngInject */
  function APIController($http, $log) {
    var vm = this;
    vm.isSearching = false;
    vm.searchText = '';
    vm.photos = [];
    vm.loadingWeather = loadingWeather;
    
    
    
    ///---


    ///---

    function loadingWeather() {
        if(vm.searchText==='') {
            return;
        }
        vm.photos = [];
        vm.isSearching = true;
        $http({
        method: 'GET',
        url: 'https://api.flickr.com/services/rest',
        params: {
            method: 'flickr.photos.getRecent',
            api_key: 'c10ca38bab37b488d506e9e2316f6a15',
            text: vm.searchText,
            format: 'json',
            nojsoncallback: 1            
        },
        }).then(function successCallback(response) {
            $log.debug(response);
            response.data.photos.photo.forEach( function(picture){ 
                var item = {src:'', title: ''};
                item.src = 'https://farm'+picture.farm+'.staticflickr.com/'+picture.server+'/'+picture.id+'_'+picture.secret+'_b.jpg';
                item.title = picture.title;
                vm.photos.push(item);
            });          
            vm.isSearching = false;
        }, function errorCallback(response) {
            vm.error = true;
            vm.isSearching = false;
        });
    }
  }
})();
