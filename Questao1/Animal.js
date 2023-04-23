"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(nome) {
        this.caracteristicas = [];
        this.nome = nome;
    }
    Animal.prototype.cadastrar = function (caracteristica) {
        this.caracteristicas.push(caracteristica);
    };
    Animal.prototype.exibirCaracteristica = function () {
        if (this.caracteristicas.length === 0) {
            console.log("Animal sem carateristicas");
        }
        console.log(this.caracteristicas[Math.floor((Math.random() * this.caracteristicas.length))]);
    };
    Animal.prototype.exibirAnimal = function () {
        console.log(this.nome);
    };
    return Animal;
}());
exports.Animal = Animal;
