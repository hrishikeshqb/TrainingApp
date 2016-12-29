module.exports = function(){
 return {
   restrict: 'E',
   templateUrl: '/src/components/footer/footer.html',
   controller: footerController,
 };
}

function footerController() {
  console.log('In footerController');
}
