app.directive('menuPromocao', function() {
    return {
        restrict: 'A',
        controller: 'menuPromocaoCtrl',
        controllerAs: 'menu',
        templateUrl: 'modules/components/menu/menu.html'
    };
});