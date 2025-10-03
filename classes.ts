class Estudante {
    nome:string;
    nota:number;
    matricula:string;

    constructor(nome:string,matricula:string){
        this.nome = nome;
        this.matricula = matricula;
        this.nota = 0;
    }

    calcularMedia(g1:number,g2:number) {
        this.nota = (g1+2*g2)/3
    }
}

const pedro = new Estudante("Pedro","13672186ASDADSH");
const duda = new Estudante("Duda","13672186ASDADSH");






class turma {
    nome: string
    alunos: Array<Estudante>;

    constructor(nome:string,alunos:Array<Estudante>){
        this.nome = nome;
        this.alunos = alunos;
    }

    gerarNotaAleatoria(): number{
        return Math.random()*(10);
    }

    atribuirNotasMalucas():void{
            this.alunos.forEach( aluno => {
                const g1 = this.gerarNotaAleatoria();
                const g2 = this.gerarNotaAleatoria();
                aluno.calcularMedia(g1,g2)
                console.log(`Nota nova do aluno ${aluno.nome} é ${aluno.nota}`);
            });

    }

}


const re = new turma("React BFD",[pedro,duda]);
re.atribuirNotasMalucas();
