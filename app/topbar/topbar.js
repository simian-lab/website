'use strict';

/**
 * @doc module
 * @name topbar
 * @description
 *
 * ## Title
 *
 * TODO: Complete this.
 */
angular.module('simian.topbar', [])

.controller('topbarController', function($scope, AnalyticsTracker) {

  /**
  * @doc function
  * @name topbar.controller:trackOpenMenu
  * @description
  * Tracks an event in analytics when the menu is opened.
  */
  $scope.trackOpenMenu = function() {
    AnalyticsTracker.eventTrack('Navigation', 'Menu opened');
  };

  /**
  * @doc function
  * @name topbar.controller:trackCloseMenu
  * @description
  * Tracks an event in analytics when the menu is closed.
  */
  $scope.trackCloseMenu = function() {
    AnalyticsTracker.eventTrack('Navigation', 'Menu closed');
  };

  /**
  * @doc function
  * @name topbar.controller:trackNavigation
  @ param {string} label for the link the user clicked on
  * @description
  * Tracks an event in analytics when the user clicks on the navigation
  * links in the menu.
  */
  $scope.trackNavigation = function(link) {
    AnalyticsTracker.eventTrack('Navigation', 'Menu link clicked', link);
  };

})

/**
 * @ngdoc directive
 * @name topbar.directive:topbar
 * @description
 * This is the best directive ever!!
 */
 .directive('topbar', function($window) {
  return {
    templateUrl: '/topbar/topbar.tpl.html',
    controller: 'topbarController',
    replace: true,
    link: function($scope, $element, $attrs) {
      var showMenu = angular.element(document.getElementById( 'showMenu' )),
      perspectiveWrapper = angular.element(document.getElementById( 'perspective' )),
      navigation = angular.element(document.getElementById( 'navigation' )),
      container = angular.element(document.getElementById( 'perspective-container' ));

      function renestNavigationElement() {
        perspectiveWrapper.append(navigation.remove());
      };

      /**
      * @doc function
      * @name topbar.function:scrollY
      * @description
      * TODO: Determines how much the page has scrolled?.
      */
      function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
      }

      function openMenu(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        docscroll = scrollY();

        // mac chrome issue:
        document.body.scrollTop = document.documentElement.scrollTop = 0;

        // add modalview class
        perspectiveWrapper.addClass('modalview');

        // animate...
        setTimeout(function() {
          perspectiveWrapper.addClass('animate');
        }, 25 );

        $scope.trackOpenMenu();
      };

      function closeMenu(ev) {
        if(perspectiveWrapper.hasClass('animate')) {

          var onEndTransFn = function( ev ) {
            if( support && ( ev.target.className !== 'container' || ev.propertyName.indexOf( 'transform' ) === -1 ) ) {
              return;
            }

            perspectiveWrapper.unbind( transEndEventName, onEndTransFn );
            perspectiveWrapper.removeClass('modalview');

            // mac chrome issue:
            document.body.scrollTop = document.documentElement.scrollTop = docscroll;
          };

          if( support ) {
            perspectiveWrapper.bind( transEndEventName, onEndTransFn );
          }
          else {
            onEndTransFn.call();
          }

          perspectiveWrapper.removeClass('animate');
          $scope.trackCloseMenu();
        }
      };

      /**
      * @doc function
      * @name topbar.function:init
      * @description
      * TODO: Initialize the menu behavior.
      */
      function init() {
        // Change the location of the menu
        renestNavigationElement();

        // Bind opening event to the menu button
        showMenu.bind('click', openMenu);

        // Bind closing event to the main element
        container.bind('click', closeMenu);

        // Make sure the parent element doesn't do anything when it's clicked.
        perspectiveWrapper.bind('click', function( ev ) {
          return false; } );

        // Make sure we identify when the page is scrolled
        angular.element($window).bind('scroll', function() {
          $scope.scrolled = true;
        });

        // If the page has scrolled, then change the topbar style
        setInterval(function() {
          if($scope.scrolled) {
            $scope.scrolled = false;
            changeTopbarStyle();
          }
        }, 100); // If performance becomes an issue, increase this number
      }

      /**
       * @doc function
       * @name topbar.directive:isElementInViewport
       * @description
       * Determines whether an element is visible in the viewport or not.
       */
      var isElementInViewport = function(el) {
        var rect = el.getBoundingClientRect();

        return (
          rect.bottom >= 0 &&
          rect.right >= 0 &&
          rect.bottom <= ($window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= ($window.innerWidth || document.documentElement.clientWidth)
        );
      };

      /**
       * @doc function
       * @name topbar.directive:changeTopbarStyle
       * @description
       * Changes the topbar style when it scrolls.
       */
      var changeTopbarStyle = function() {
        var logo = document.getElementById('logo');

        if(isElementInViewport(logo))
          $scope.mainClass = 'topbar';
        else
          $scope.mainClass = 'topbar scrolled';

        $scope.$apply();
      };

      var docElem = window.document.documentElement,
      // support transitions
      support = Modernizr.csstransitions,
      // transition end event name
      transEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd',
        'transition': 'transitionend'
      },
      transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
      docscroll = 0;

      init();
    }
  };
 })
 ;
