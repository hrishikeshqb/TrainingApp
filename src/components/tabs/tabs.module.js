var tabsDirective = require('./tabs.directive.js');
var tabDirective = require('./tab/tab.directive.js');
require('./tabs.scss');
require('./tab/tab.scss');

angular.module('tabs', []).directive('tabs', tabsDirective)
                          .directive('tab', tabDirective);
