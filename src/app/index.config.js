(function() {
  'use strict';

  angular
    .module('hwtwoAngularEpamgrillParty')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
