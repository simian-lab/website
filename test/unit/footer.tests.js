'use strict'
describe('footer', function() {
  beforeEach(module('myApp'));
  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));
  it('Replaces the element with content', function() {
    var element = $compile('<div footer class="footer"></div>')($rootScope);
    $rootScope.$digest();
    expect(element.html())
  });
});