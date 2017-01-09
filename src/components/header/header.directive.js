var headerTemplateUrl = require('ngtemplate!html!./header.html');

module.exports = function(){
 return {
   restrict: 'E',
   templateUrl: headerTemplateUrl,
 };
}
