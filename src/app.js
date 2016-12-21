'use-strict';

angular.module('trainingApp',['ui.router']).config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  // For any unmatched url, redirect to /home
  $urlRouterProvider.otherwise("/home");

  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');

  $stateProvider
    .state('home', {
      url: "/home",
      template: '<h3>Welcome to training app</h3>'
    });
});
