(function() {
  'use strict';

  angular
    .module('hwtwoAngularEpamgrillParty')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
