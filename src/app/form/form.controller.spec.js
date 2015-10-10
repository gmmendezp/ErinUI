(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('test'));

    it('should define more than 5 awesome things', inject(function($controller) {
      var vm = $controller('FormController');


    }));
  });
})();
