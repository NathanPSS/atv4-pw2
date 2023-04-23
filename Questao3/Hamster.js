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
exports.Hamster = void 0;
var PequenoRoedor_1 = require("./PequenoRoedor");
var Hamster = /** @class */ (function (_super) {
    __extends(Hamster, _super);
    function Hamster() {
        return _super.call(this, "Hamster") || this;
    }
    Hamster.prototype.correr = function () {
        this.felicidade++;
    };
    Hamster.prototype.comer = function (comida) {
        return true;
    };
    return Hamster;
}(PequenoRoedor_1.PequenoRoedor));
exports.Hamster = Hamster;
