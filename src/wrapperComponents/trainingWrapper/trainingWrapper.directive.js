module.exports = function(){
 return {
   restrict: 'E',
   templateUrl: '/src/wrapperComponents/trainingWrapper/trainingWrapper.html',
   controller: ['calendarServices', wrapperController],
   controllerAs: 'vm'
 };
}

function wrapperController(calendarServices) {

  var vm = this;
  vm.events = [];
  vm.calendarView = 'month';
  vm.viewDate = new Date();

  var calenderEventPromise = calendarServices.getCalendarEvents();
  calenderEventPromise.then(function successCallBack(response) {
      vm.events = parseEventArray(response.data.events);
  }, function failueCallBack(reason) {
      console.log('Request Failed', reason);
  });

}

function parseEventArray(eventArray) {
  angular.forEach(eventArray, function(event){
    event.startsAt = new Date(event.startsAt*1000);
    event.endsAt = new Date(event.endsAt*1000);
  });

  return eventArray;
}
