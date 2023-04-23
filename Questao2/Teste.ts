import { Filhote } from "./Filhote";


const filhote = new Filhote(["branco,cinza"],2)

console.log("Propriedades de filhote")
console.log(filhote.pelagem);
console.log(filhote.cores);
console.log(filhote.tutor)

console.log("FIlhote com tutor Carlos")
filhote.adotar("Carlos")
console.log(filhote.tutor)