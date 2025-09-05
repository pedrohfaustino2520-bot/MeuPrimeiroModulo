const gato = {
    nome: "Tigresa",
    espécie: "gato",
    raça: "Frajola",
    idade: "2 anos"
};

console.log(gato.nome);
console.log(gato.idade);

const cachorro = {
    nome: "bolt",
    espécie: "cachorro",
    raça: "pastor alemão",
    idade: "5 anos",
    consultas: ["12/09/2025","19/09/2025"],
    dono: {nome:"Pedro",celular:"21983990238092"},
    imprimirNomeDono() {
        console.log(this.dono.nome);
    },
    verificarConsulta(){
        if(this.consultas.length>0) {
            console.log("Tem consultas")
        } else {
            console.log("Não tem consultas");
        }
    }
};

cachorro.verificarConsulta()
