import { Animal } from "./Animal";

const animal = new Animal("Louro Jose")

console.log("Nome do Animal")
animal.exibirAnimal()

console.log("Exibir Caracteristicas sem cadastrar nenhuma")
animal.exibirCaracteristica()

animal.cadastrar("Voar")
animal.cadastrar("Verde")
animal.cadastrar("Apresenta o Mais Voce")
animal.cadastrar("Bico Laranja")

console.log("Exibir caracteristicas depois de cadastra-las")
animal.exibirCaracteristica()
animal.exibirCaracteristica()

