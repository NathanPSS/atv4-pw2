import { comidaDePet } from "./ComidaDePet"

export abstract class PequenoRoedor {

   readonly especie :string
    
   felicidade = 0


   constructor(especie :string){
      this.especie = especie
   }

   public abstract comer(comida :comidaDePet) :boolean


   public estarFeliz() :boolean{
      return (this.felicidade > 0)
   }
}