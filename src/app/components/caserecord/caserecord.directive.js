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
        Itemd: '='
      },
        link: function (scope, elem, attr) {
            //scope.Items = true;
            //$log.debug(999999, $scope.$parent.peopleList);
            //if(scope.Itemd)
            $log.debug(999999, scope.Itemd );
            
        }
    };
    return directive;
  }

})();
