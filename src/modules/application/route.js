app.config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');

    var homeState = {
        name: 'home',
        url: '/:promoName',
        templateUrl: 'modules/home/partials/home.html',
        controller: "homeCtrl",
        controllerAs: "home"
    };

    var cadastroState = {
        name: 'cadastro',
        url: '/cadastro/:promoName',
        templateUrl: 'modules/cadastro/partials/cadastro.html',
        controller: "cadastroCtrl",
        controllerAs: "cadastro"
    };

    $stateProvider.state(homeState);
    $stateProvider.state(cadastroState);
});