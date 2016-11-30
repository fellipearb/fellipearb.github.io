class Gato { 
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(this.nome + ' emite um barulho.');
    }
}

(function(){
    var gato = new Gato('PICHANI');
    gato.falar();
})();