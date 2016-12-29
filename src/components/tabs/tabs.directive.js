module.exports = function(){
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    templateUrl: '/src/components/tabs/tabs.html',
    controller: ['$scope', function tabsController($scope) {
      var tabs = $scope.tabs = [];

      $scope.select = function(tab) {
        angular.forEach(tabs, function(tab) {
          tab.selected = false;
        });
        tab.selected = true;
      };

      this.addTab = function(tab) {
        if (tabs.length === 0) {
          $scope.select(tab);
        }
        tabs.push(tab);
      };
    }]
  };
};
