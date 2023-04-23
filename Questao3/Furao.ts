import { comidaDePet } from "./ComidaDePet";
import { PequenoRoedor } from "./PequenoRoedor";

export class Furao extends PequenoRoedor {


  constructor(){
    super("Furao")
  }

    public comer(comida: comidaDePet): boolean {
        return (comida === "insetos" || comida === "plantas" || comida === "vegetais" || comida === "sementes")
    }
    
    public cavar() :void{
        this.felicidade++
    }
}