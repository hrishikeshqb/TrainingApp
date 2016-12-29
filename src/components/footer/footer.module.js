var footerDirective = require('./footer.directive.js');
require('./footer.scss');
angular.module('footer', []).directive('footer', footerDirective);
