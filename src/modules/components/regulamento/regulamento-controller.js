app.controller('regulamentoCtrl', function(getRegulamento) {    
    var vm = this;    

    getRegulamento.regulamento().then(function (response) {        
        vm.text = response.data.text;
        // console.log( vm.text )
    });
});