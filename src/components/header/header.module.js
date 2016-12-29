var headerDirective = require('./header.directive.js');
require('./header.scss');
angular.module('header', []).directive('header', headerDirective);
