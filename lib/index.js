
/**
 * Module dependencies.
 */
var angular = require('angular');
require('angular-ui-router');

/**
 * Expose ui-router-test.
 */
var router = module.exports = angular.module('uiRouterTest', ['ui.router']);

router.config(function($stateProvider, $urlRouterProvider){

  // Unmatched url
  $urlRouterProvider.otherwise('/parent');

  // Routes & states
  $stateProvider
  .state('parent', {
    url: '/parent',
    template: '<ui-view>Parent</ui-view>',
    controller: function($scope){
      console.count('parent');
    }
  })
  .state('parent.child', {
    url: '/child',
    template: '<ui-view>Child</ui-view>',
    controller: function($scope){
      console.count('child')
    }
  });

});

