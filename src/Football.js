"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Football_golokSzama, _Football_enemyGolok;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Football = void 0;
class Football {
    constructor(winner, date, golokSzama, enemyGolok) {
        _Football_golokSzama.set(this, void 0);
        _Football_enemyGolok.set(this, void 0);
        this.winner = winner;
        this.date = date;
        __classPrivateFieldSet(this, _Football_golokSzama, golokSzama, "f");
        __classPrivateFieldSet(this, _Football_enemyGolok, enemyGolok, "f");
    }
    getWinner() {
        return this.winner;
    }
    setWinner(winner) {
        this.winner = winner;
    }
    getDate() {
        return this.date;
    }
    setDate(date) {
        this.setDate = Date;
    }
    result() {
        return "Football match: " + __classPrivateFieldGet(this, _Football_golokSzama, "f") + "-" + __classPrivateFieldGet(this, _Football_enemyGolok, "f");
    }
}
exports.Football = Football;
_Football_golokSzama = new WeakMap(), _Football_enemyGolok = new WeakMap();
