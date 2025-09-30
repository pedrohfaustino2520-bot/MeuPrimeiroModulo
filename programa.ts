const calcularCubo = (num:number):number => {
      return num**3;
}

const resposta:number = calcularCubo(3);
console.log(resposta);

function primeiraOuultimaLetra(palavra: string, pOuU: boolean) {
    if (pOuU) {
        console.log(palavra[0]);
    } else {
        console.log(palavra[palavra.length - 1]);
    }
}

primeiraOuultimaLetra("lety", false);



