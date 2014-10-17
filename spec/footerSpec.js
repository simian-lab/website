'use strict'
describe('footer test', function() {
  var $compile;
  var $rootScope;
  var $httpBackend;
  var createController;
  beforeEach(angular.module('simian.footer', ['simian.configuration']));
  beforeEach(inject(function($inyector,_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $httpBackend = $inyector.get('$httpBackend');
    createController = function() {
      return $controller('footerController', {'$scope' : $rootScope });
    };
  }));
  it('should show html', function() {
    var element = $compile('<div footer class="footer"></div>')($rootScope);
    $rootScope.$digest();
    expect(element.html()).toContain('form name="contact" ng-submit="sendForm()"');
  });
  it('should send http request', function(){
    var rutaContacto = $rootScope.CONTACT_ROUTE;
    var controller = createController();
    expectPost(rutaContacto,)
  })
});
