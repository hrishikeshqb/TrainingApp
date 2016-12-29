'use-strict';
require('./components/header/header.module.js');
require('./components/footer/footer.module.js');

angular.module('trainingApp',['ui.router', 'header', 'footer']).config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  // For any unmatched url, redirect to /home
  $urlRouterProvider.otherwise("/home");

  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');

  $stateProvider
    .state('home', {
      url: "/home",
      template:'<header></header>'+
      '<footer></footer>',
    });
  });
