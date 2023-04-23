"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filhote = void 0;
var Filhote = /** @class */ (function () {
    function Filhote(cores, pelagem) {
        this.cores = cores;
        this.pelagem = pelagem;
        this.tutor = undefined;
    }
    Filhote.prototype.adotar = function (tutor) {
        this.tutor = tutor;
    };
    return Filhote;
}());
exports.Filhote = Filhote;
