app.config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');

    var homeState = {
        name: 'home',
        url: '/:promoName',
        templateUrl: 'modules/home/partials/home.html',
        controller: "homeCtrl",
        controllerAs: "home",
        // data: {
        //     css: 'modules/application/components.css'
        // }
    };

    $stateProvider.state(homeState);
});