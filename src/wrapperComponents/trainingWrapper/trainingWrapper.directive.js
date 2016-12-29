module.exports = function(){
 return {
   restrict: 'E',
   templateUrl: '/src/wrapperComponents/trainingWrapper/trainingWrapper.html',
   controller: wrapperController,
 };
}

function wrapperController() {
  console.log('In wrapperController');
}
