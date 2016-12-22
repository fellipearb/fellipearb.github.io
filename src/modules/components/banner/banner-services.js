app.factory('getBanners', function($http){
    function banners() {
        return $http.get(endpoint + 'promocao/services/banners');
    }

    return {
        'banners': banners
    };
});