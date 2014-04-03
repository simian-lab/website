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

.controller('topbarController', function($scope, AnalyticsTracker, smoothScroll) {

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

  $scope.scroll = function(id) {
    smoothScroll(document.getElementById(id), {
      offset: 60 // The height of the topbar
    });
  };
})

/**
 * @ngdoc directive
 * @name topbar.directive:topbar
 * @description
 * This is the best directive ever!!
 */
 .directive('topbar', function($window, $location, $anchorScroll) {
  return {
    templateUrl: '/topbar/topbar.tpl.html',
    controller: 'topbarController',
    replace: true,
    link: function($scope, $element, $attrs) {

      // Initialize variables
      var showMenu = angular.element(document.getElementById( 'showMenu' )),
      perspectiveWrapper = angular.element(document.getElementById( 'perspective' )),
      navigation = angular.element(document.getElementById( 'navigation' )),
      container = angular.element(document.getElementById( 'perspective-container' ));

      /**
      * @doc function
      * @name topbar.function:renestNavigationElement
      * @description
      * Changes the position of the <nav> element in the DOM.
      */
      function renestNavigationElement() {
        perspectiveWrapper.append(navigation.remove());
      };

      function openMenu(ev) {
        ev.stopPropagation();
        ev.preventDefault();

        // mac chrome issue:
        //document.body.scrollTop = document.documentElement.scrollTop = 0;

        // add modalview class
        perspectiveWrapper.addClass('modalview');

        // animate...
        setTimeout(function() {
          perspectiveWrapper.addClass('animate');
        }, 25 );

        $scope.trackOpenMenu();
      };

      function closeMenu(ev, scroll) {
        ev.stopPropagation();
        ev.preventDefault();

        if(perspectiveWrapper.hasClass('animate')) {

          var onEndTransFn = function( ev ) {
            if( support && ( ev.target.className !== 'container' || ev.propertyName.indexOf( 'transform' ) === -1 ) ) {
              return;
            }

            perspectiveWrapper.unbind( transEndEventName, onEndTransFn );
            perspectiveWrapper.removeClass('modalview');

            // mac chrome issue:
            document.body.scrollTop = document.documentElement.scrollTop = docscroll;

            if(scroll)
              $scope.scroll(scroll);
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

      function goToMenuLink(ev) {
        var href = ev.currentTarget.hash;
        var id = href.substr(1, href.length);

        closeMenu(ev, id);
        $scope.trackNavigation(id);
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

        var anchors = navigation.children();

        for (var i = 0; i < anchors.length; i++) {
          angular.element(anchors[i]).bind('click', goToMenuLink);
        }

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
