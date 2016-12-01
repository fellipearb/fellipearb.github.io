app.config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');

    var homeState = {
        name: 'home',
        url: '/',
        templateUrl: 'modules/home/partials/home.html',
        //controller: "HomeCtrl",
    }

    $stateProvider.state(homeState);
});