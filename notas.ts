const prompts = require("prompt-sync")();

class Nota{
   tom:string;
   oitava: number;
   tons_validos: string= "CDEFGAB";
    
     constructor(tom:string,oitava:number){
      if(this.tons_validos.includes(tom)){
        if(oitava>0 && oitava<1000){        
          this.tom = tom;
          this.oitava = oitava;
        } else {
          throw Error("Oitava inválida")
        }
      } else {
        throw Error("Não é um tom válido");
        
      }
      
    }

     
}

class GerenciarNotas{
  notas: Array<Nota>;
   
  constructor(){
    this.notas =[];
  }

  adicionarNotas(){
    const t = prompts("Qual é o tom?");
    const o = Number(prompts("Qual é o oitava?"));
    try {
      const novaNota = new Nota(t,o);
      this.notas.push(novaNota);
    } catch (error:any) {
      console.log("O seguinte erro aconteceu", error.message)
      
    }
    
  }


}


const ger = new GerenciarNotas();
for (let index = 0; index<5; index++) {
    ger.adicionarNotas();
    console.log(ger.notas);
}






