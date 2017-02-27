app.controller('menuCtrl', function($stateParams, cssInjector) {
    //css inject
    cssInjector.add('modules/components/menu/menu.css');
    
    var vm = this;

    vm.itens = [
        {
            // link: '/' + $stateParams.promoName,
            link: 'home',
            icone: '/assets/images/banner.jpg',
            texto: 'Home',
            border: 'pColor'
        },
        {
            // link: '/regulamento/' + $stateParams.promoName,
            link: 'regulamento',
            icone: '/assets/images/banner.jpg',
            texto: 'Regumlamento',
            border: 'sColor'
        },
        {
            // link: '/cadastrese/' + $stateParams.promoName,
            link: 'contato',
            icone: '/assets/images/banner.jpg',
            texto: 'Contato',
            border: 'pColor'
        },
        {
            // link: '/login/' + $stateParams.promoName,
            link: 'login',
            icone: '/assets/images/banner.jpg',
            texto: 'Login',
            border: 'sColor'
        }
    ];
})