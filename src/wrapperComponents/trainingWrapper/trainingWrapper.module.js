var trainingWrapperDirective = require('./trainingWrapper.directive.js');
require('./trainingWrapper.scss');
angular.module('trainingWrapper', []).directive('trainingwrapper', trainingWrapperDirective);
