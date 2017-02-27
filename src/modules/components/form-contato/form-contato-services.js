app.factory('getContato', function($http){
    function contato() {
        return $http.get(endpoint + 'contato');
    }

    return {
        'contato': contato
    };
});