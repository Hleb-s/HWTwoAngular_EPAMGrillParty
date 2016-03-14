(function() {
  'use strict';

  angular
    .module('hwtwoAngularEpamgrillParty')
    .directive('caseRecord', caseRecord);

  /** @ngInject */
  function caseRecord($log) {
    var directive = {
      restrict: 'AE',
      templateUrl: 'app/components/caserecord/caserecord.html',
      scope: {
        items: '=',
      },
        link: function (scope) {
            scope.GetPhoto = function GetPhoto(item) {
                if(item && item.fotourl && item.fotourl!=='')
                    return item.fotourl;
                else{
                    if(item.sex && item.sex === 1)
                        return '/assets/PhotoPersons/noPhotoMan.jpg'
                    else
                        return '/assets/PhotoPersons/noPhotoWomen.jpg'
                }
            } 
        }
    };
    return directive;
  }
})();
