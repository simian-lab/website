'use strict'
describe('footer', function() {
  var $compile;
  var $rootScope;
  beforeEach(module('simian.footer'));
  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));
  it('Footer Spec', function() {
    var element = $compile('<div footer class="footer"></div>')($rootScope);
    $rootScope.$digest();
    var rutaContacto = $rootScope.CONTACT_ROUTE
    expect(element.html()).toContain("form action="rutaContacto" method="post"");
  });
});