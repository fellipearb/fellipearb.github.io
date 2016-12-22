app.factory('getRegulamento', function($http){
    function regulamento() {
        return $http.get(endpoint + 'promocao/services/regulamento');
    }

    return {
        'regulamento': regulamento
    };
});