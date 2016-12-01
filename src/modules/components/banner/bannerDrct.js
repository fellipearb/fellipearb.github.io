app.directive('banner', function() {
    return {
        restrict: 'A',
        controller: 'bannerCtrl',
        controllerAs: 'banners',
        templateUrl: 'modules/components/banner/banner.html'
    };
});