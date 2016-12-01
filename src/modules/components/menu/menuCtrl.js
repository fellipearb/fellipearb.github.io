app.controller('menuPromocaoCtrl', function($stateParams, cssInjector) {
    //css inject
    cssInjector.add('modules/components/menu/menu.css');
    
    var vm = this;

    vm.itens = [
        {
            link: '/' + $stateParams.promoName,
            icone: '/assets/images/banner.jpg',
            texto: 'Home',
            border: 'pColor'
        },
        {
            link: '/regulamento/' + $stateParams.promoName,
            icone: '/assets/images/banner.jpg',
            texto: 'Regumlamento',
            border: 'sColor'
        },
        {
            link: '/cadastrese/' + $stateParams.promoName,
            icone: '/assets/images/banner.jpg',
            texto: 'Cadastre-se',
            border: 'pColor'
        },
        {
            link: '/login/' + $stateParams.promoName,
            icone: '/assets/images/banner.jpg',
            texto: 'Login',
            border: 'sColor'
        }
    ];
})