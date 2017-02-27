app.controller('homeCtrl', function($stateParams) {    
    var vm = this;

    vm.title = $stateParams.promoName;
});