var trainingWrapperDirective = require('./trainingWrapper.directive.js');
require('./trainingWrapper.scss');
require('../../services/index.js');

angular.module('trainingWrapper', ['commonServiceModule']).directive('trainingwrapper', trainingWrapperDirective);
