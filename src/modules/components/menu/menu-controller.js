app.controller('menuCtrl', function($stateParams, cssInjector) {
    //css inject
    cssInjector.add('modules/components/menu/menu.css');

    //functions
    var vm = this;
    vm.toogle = false;
    vm.width = window.innerWidth;
    vm.height = window.innerHeight;

    vm.itens = [
        {            
            link: 'home',
            icone: '/assets/images/banner.jpg',
            texto: 'Home',
            border: 'pColor'
        },
        {            
            link: 'skills',
            icone: '/assets/images/banner.jpg',
            texto: 'Skills',
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