module.exports = function(){
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      title: '@'
    },
    templateUrl: '/src/components/tabs/tab/tab.html',
    require: '^^tabs',
    link: function(scope, element, attrs, tabsCtrl) {
      tabsCtrl.addTab(scope);
    }
  };
};
