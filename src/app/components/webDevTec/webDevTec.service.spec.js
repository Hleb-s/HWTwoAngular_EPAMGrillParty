(function() {
  'use strict';

  describe('service webDevTec', function() {
    var webDevTec;

    beforeEach(module('hwtwoAngularEpamgrillParty'));
    beforeEach(inject(function(_webDevTec_) {
      webDevTec = _webDevTec_;
    }));

    it('should be registered', function() {
      expect(webDevTec).not.toEqual(null);
    });

    describe('getTec function', function() {
      it('should exist', function() {
        expect(webDevTec.getTec).not.toEqual(null);
      });
    });
  });
})();
