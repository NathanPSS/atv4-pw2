import { Furao } from "./Furao";
import { Hamster } from "./Hamster";


const furao = new Furao();
const hamster = new Hamster();

console.log("Especie Furao")
console.log(furao.especie);

console.log("Furao felicidade")
console.log(furao.felicidade);

furao.cavar()
furao.cavar();

console.log("Furao Apos cavar 2 vezes")
console.log(furao.felicidade)

console.log("Furao comendo inseto semente vegetais e plantas")
console.log(furao.comer("vegetais"))
console.log(furao.comer("insetos"))
console.log(furao.comer("plantas"))
console.log(furao.comer("sementes"))

console.log("Furao comendo frutas")
console.log(furao.comer("frutas"))

console.log("Felicidade Hamster")
console.log(hamster.felicidade)

console.log("Especie Hamster")
console.log(hamster.especie)

console.log("Hamster felicidade apos correr 2 vezes")
hamster.correr()
hamster.correr()
console.log(hamster.felicidade)

console.log("Hamster comer metodo")
console.log(hamster.comer("frutas"))