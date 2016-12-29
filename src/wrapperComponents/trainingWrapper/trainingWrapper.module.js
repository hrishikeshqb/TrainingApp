var trainingWrapperDirective = require('./trainingWrapper.directive.js');
require('./trainingWrapper.scss');
require('../../components/tabs/tabs.module.js');

angular.module('trainingWrapper', ['tabs']).directive('trainingwrapper', trainingWrapperDirective);
