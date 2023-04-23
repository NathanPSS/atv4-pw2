"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PequenoRoedor = void 0;
var PequenoRoedor = /** @class */ (function () {
    function PequenoRoedor(especie) {
        this.felicidade = 0;
        this.especie = especie;
    }
    PequenoRoedor.prototype.estarFeliz = function () {
        return (this.felicidade > 0);
    };
    return PequenoRoedor;
}());
exports.PequenoRoedor = PequenoRoedor;
