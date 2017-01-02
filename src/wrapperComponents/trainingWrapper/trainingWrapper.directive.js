module.exports = function(){
 return {
   restrict: 'E',
   templateUrl: '/src/wrapperComponents/trainingWrapper/trainingWrapper.html',
   controller: ['trainingService', wrapperController],
 };
}

function wrapperController(trainingService) {
  console.log('In wrapperController');
  trainingService.getTrainings();
}
