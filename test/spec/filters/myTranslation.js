'use strict';

describe('Filter: myTranslation', function () {

  // load the filter's module
  beforeEach(module('angularLocalisationApp'));

  // initialize a new instance of the filter before each test
  var myTranslation;
  beforeEach(inject(function ($filter) {
    myTranslation = $filter('myTranslation');
  }));

  it('should return the input prefixed with "myTranslation filter:"', function () {
    var text = 'angularjs';
    expect(myTranslation(text)).toBe('myTranslation filter: ' + text);
  });

});
