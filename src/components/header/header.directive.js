module.exports = function(){
 return {
   restrict: 'E',
   templateUrl: '/src/components/header/header.html',
   controller: headerController,
 };
}

function headerController() {
  console.log('In headerController');
}
