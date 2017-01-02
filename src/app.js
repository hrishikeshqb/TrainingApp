'use-strict';
require('./wrapperComponents/trainingWrapper/trainingWrapper.module.js')
require('./components/header/header.module.js');
require('./components/footer/footer.module.js');

angular.module('trainingApp',['ui.router', 'trainingWrapper', 'header', 'footer']).
  config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/home");

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

    $stateProvider
      .state('home', {
        url: "/home",
        template:'<header></header>'+
                 '<trainingwrapper></trainingwrapper>'+
                 '<footer></footer>',
      });
  }).service('trainingService',['$http', function ($http){
    this.getTrainings = function(){
      $http({
        method: 'GET',
        url: '/src/mockdata.json'
      }).then(function successCallback(response) {
          console.log('Succeffully fetched data', response);
      }, function errorCallback() {
          console.log('Failed!');
      });
    };
  }]);
