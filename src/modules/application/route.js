app.config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');

    var homeState = {
        name: 'home',
        url: '/',
        templateUrl: 'modules/home/partials/home.html',
        controller: "homeCtrl",
        controllerAs: "home"
    }

    $stateProvider.state(homeState);
});