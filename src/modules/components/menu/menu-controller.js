app.controller('menuCtrl', function($stateParams, cssInjector) {
    //css inject
    cssInjector.add('modules/components/menu/menu.css');
    
    var vm = this;

    vm.itens = [
        {            
            link: 'home',
            icone: '/assets/images/banner.jpg',
            texto: 'Home',
            border: 'pColor'
        },
        {            
            link: 'projects',
            icone: '/assets/images/banner.jpg',
            texto: 'Projects',
            border: 'sColor'
        },
        {            
            link: 'contact',
            icone: '/assets/images/banner.jpg',
            texto: 'Contact',
            border: 'pColor'
        }
    ];
})