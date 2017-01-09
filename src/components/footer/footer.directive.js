var footerTemplateUrl = require('ngtemplate!html!./footer.html');

module.exports = function(){
 return {
   restrict: 'E',
   templateUrl: footerTemplateUrl,
 };
}
