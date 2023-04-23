"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Furao = void 0;
var PequenoRoedor_1 = require("./PequenoRoedor");
var Furao = /** @class */ (function (_super) {
    __extends(Furao, _super);
    function Furao() {
        return _super.call(this, "Furao") || this;
    }
    Furao.prototype.comer = function (comida) {
        return (comida === "insetos" || comida === "plantas" || comida === "vegetais" || comida === "sementes");
    };
    Furao.prototype.cavar = function () {
        this.felicidade++;
    };
    return Furao;
}(PequenoRoedor_1.PequenoRoedor));
exports.Furao = Furao;
