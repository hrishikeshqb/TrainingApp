var trainingWrapperDirective = require('./trainingWrapper.directive.js');
require('./trainingWrapper.scss');
require('../../components/tabs/tabs.module.js');
require('../../components/training/training.module.js');

angular.module('trainingWrapper', ['tabs', 'commonServiceModule']).directive('trainingwrapper', trainingWrapperDirective);
