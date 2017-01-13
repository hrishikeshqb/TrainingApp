angular.module('commonServiceModule', []).service('calendarServices', function($http){
  this.getCalendarEvents = function (){
    return ($http({
      method: 'GET',
      url: '/src/mockdata.json'
    }));
  };
});
