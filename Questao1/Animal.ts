export class Animal {

    private nome :string
    private caracteristicas :string[] = []

    
    constructor(nome :string){
        this.nome= nome
    }
    

    public cadastrar(caracteristica :string) :void{
        this.caracteristicas.push(caracteristica);
    }

    public exibirCaracteristica() :void{
        if(this.caracteristicas.length === 0){
            console.log("Animal sem carateristicas")
        }
        console.log(this.caracteristicas[Math.floor((Math.random() * this.caracteristicas.length))])
    }

    public exibirAnimal() :void{
        console.log(this.nome)
    }
}