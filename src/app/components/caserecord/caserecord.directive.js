(function() {
  'use strict';

  angular
    .module('hwtwoAngularEpamgrillParty')
    .directive('caseRecord', caseRecord);

  /** @ngInject */
  function caseRecord() {
    var directive = {
      restrict: 'AE',
      templateUrl: 'app/components/caserecord/caserecord.html',
      scope: {
        items: '='
      },
        link: function (scope) {
                      
            scope.GetPhoto = function (item) {
                if(item && item.fotourl && item.fotourl!=='')
                    return item.fotourl;
                else{
                    if(item.sex && item.sex === "1")
                        return '/assets/PhotoPersons/noPhotoMan.jpg'
                    else
                        return '/assets/PhotoPersons/noPhotoWomen.jpg'
                }
            }
            
            scope.GetImgStatus = function (item) {
                if(item && item.iswill && item.iswill ==='1')
                    return '/assets/images/yes32.ico';
                if(item && item.iswill && item.iswill ==='2')
                    return '/assets/images/cancel32.ico';
                if(item && item.iswill && item.iswill ==='3')
                    return '/assets/images/question32.ico';
            } 
        }
    };
    return directive;
  }
})();
