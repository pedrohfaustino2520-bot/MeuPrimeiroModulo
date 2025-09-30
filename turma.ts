type Aluno = {
    nome: string;
    matricula: number;
    nota: number;
};


const imprimirAluno = (al:Aluno) => {
    console.log(`Aluno ${al.nome} com Matricula ${al.matricula} e nota ${al.nota}`);
}


const PH: Aluno = {
    nome: "PH",
    matricula: 202028495030,
    nota:10
};

imprimirAluno(PH)



type Turma = {
    materia: string;
    codigo: number;
    alunos: Array<Aluno>;
};

const imprimirPresenca = (tur: Turma) => {
    console.log(tur.materia);
    tur.alunos.forEach((al)=> {
        console.log(`- ${al.nome} - ${al.nota}`)
    });
}

const t:Turma = {
    materia: "Programação",
    codigo: 2884929123,
    alunos: [PH]
};

imprimirPresenca(t)

const matricularAluno = (turma:Turma,aluno: Aluno) => {
    turma.alunos.push(aluno)
}


const Wlad: Aluno = {
    nome: "Wlad",
    matricula: 342433,
    nota:2
};

matricularAluno(t,Wlad);
imprimirPresenca(t)


