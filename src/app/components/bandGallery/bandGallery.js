/** 
BandGallery Directive
Created by Daniel Eckelt
Date: 12.September 2014;
**/

(function() {
  'use strict';

  angular
    .module('hwtwoAngularEpamgrillParty')
    .directive('bandGallery', bandGallery);

  /** @ngInject */
  function bandGallery($window, $log) {
    var directive = {
		restrict: 'E',
		scope: {
			"pageNr": "=",
			"navTopBtn": "=",
			"navDownBtn" : "=",
			"timer" : "=",
			"bandGalleryImgs": "=galleryImgs"
		},
		link: function(scope, element) {
$log.debug(11111110000099999);
			// checking for attributes: set true, if undefined
			scope.topBtnActive = scope.navTopBtn === angular.isUndefined || !!scope.navTopBtn;
			scope.downBtnActive = scope.navDownBtn === angular.isUndefined || !!scope.navDownBtn;
			scope.pageNrActive = scope.pageNr === angular.isUndefined || !!scope.pageNr;
			
			function checkForEasingPlugin(desired, fallback) {
				if(!fallback) {
					fallback = "swing";
				}
				if(jQuery.easing[desired]) {
					return desired;
				} else {
					return fallback;
				}
			}

			scope.prevImg = function(index) {
				if(index-1 > -1) {
					angular.element('html,body').animate({
						scrollTop: angular.element('.band-'+(index-1)).offset().top
					}, 1000, checkForEasingPlugin("easeInOutCubic"));
				}
			};

			scope.nextImg = function(index) {
				if(index+1 < scope.bandGalleryImgs.length) {
					angular.element('html,body').animate({
						scrollTop: angular.element('.band-'+(index+1)).offset().top
					}, 1000, checkForEasingPlugin("easeInOutCubic"));
					if(scope.timer && scope.timer > 0) {
						doSetTimeout(index+1);
					}
				}
			};

			function doSetTimeout(i) {
				setTimeout(function() {
					angular.element('html,body').animate({
						scrollTop: angular.element('.band-'+(i+1)).offset().top
					}, 1000, checkForEasingPlugin("easeInOutCubic"));
					if((++i)+1 < scope.bandGalleryImgs.length) {
						doSetTimeout(i);
					}
				}, scope.timer*1000);
			}

			scope.goTop = function() {
				angular.element('html,body').animate({
					scrollTop: angular.element('.band-0').offset().top
				}, 1500, checkForEasingPlugin("easeOutCirc"));
			}


			function adjustHeights() {
				element[0].setAttribute('style', 'height:' + (scope.bandGalleryImgs.length * $window.innerHeight) + 'px; display: block');
				scope.windowHeight = $window.innerHeight;
				return scope.windowHeight;
			}

			// detecting size of window at first call
			var oldVal = adjustHeights();
			// window listener, that watches for resize
			angular.element($window).bind('resize', function() {
				// only if windows new size changes more than 10%, rescaling is done
				var newVal = $window.innerHeight;
				if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					if(Math.abs(newVal - oldVal) > (newVal * 0.15)) {
						adjustHeights();
						scope.$apply();	
					}
				} else {
					adjustHeights();
					scope.$apply();
				}

			});
		},
		template: 
		"<div data-ng-repeat='band in bandGalleryImgs' class='band band-{{$index}}' style='background-image: url({{band.url}}); height:{{windowHeight}}px'>" +
		"<button class='overlayBtn prevBtn' data-ng-click='prevImg($index)' data-ng-show='topBtnActive && !$first'> &gt; </button>" +
		"<button class='overlayBtn nextBtn' data-ng-click='nextImg($index)' data-ng-show='downBtnActive && !$last'> &gt; </button>" +
		"<button class='overlayBtn goTopBtn' data-ng-click='goTop()' data-ng-show='(downBtnActive || topBtnActive) && $last'> &gt;&gt; </button>" +
		"<h1 class='band-heading'>{{band.title}}</h1>" +
		"<p class='band-description'>{{band.description}}</p>" +
		"<div class='pageNr' data-ng-show='pageNrActive'> {{$index+1}}/{{bandGalleryImgs.length}} </div>" +
		"</div>"
    };
    return directive;
  }
})();