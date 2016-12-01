app.directive('menuPromocao', function () {
  return {
    restrict: 'A',
    controller: 'menuPromocaoCtrl',
    controllerAs: 'ctrl',
    template: 'Name: {{ctrl.name}} Address: {{ctrl.address}}',
  };
});