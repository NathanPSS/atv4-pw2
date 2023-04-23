import { comidaDePet } from "./ComidaDePet";
import { PequenoRoedor } from "./PequenoRoedor";


export class Hamster extends PequenoRoedor {

    constructor(){
        super("Hamster")
    }

    correr() :void{
        this.felicidade++
    }

    public comer(comida: comidaDePet): boolean {
        return true
    }
}