app.controller('bannerCtrl', function(getBanners) {    
    var vm = this;    

    getBanners.banners().then(function (response) {
        console.log( response.data )
        vm.itens = response.data;
    });
});