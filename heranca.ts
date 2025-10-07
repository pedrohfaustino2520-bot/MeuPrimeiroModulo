class GuardaInformacao{
    protected info: string;

    constructor(info:string){
        this.info = info;
    }

    guardarinfo(infonova:string){
        this.info = infonova;
    }

    falarInfo() {
        console.log(this.info)
    }
}


class GuardaSegredo extends GuardaInformacao{
    private senha: string;

    constructor(info:string,senha: string){
        super(info);
        this.senha = senha;
    }

    guardarinfo(infonova: string,senha:string): void {
        if(this.senha === senha) {
            this.info = infonova;
        }
    }

}

const gs = new GuardaSegredo("Meu segredo é...","1234");

gs.guardarinfo("Segredo novo","1234")

gs.falarInfo();