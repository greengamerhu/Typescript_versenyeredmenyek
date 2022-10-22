"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calvinball = void 0;
class Calvinball {
    constructor(winner, date) {
        this.winner = winner;
        this.date = date;
        this.points = Math.random() * (101 - 10) + 10;
    }
    getWinner() {
        return this.winner;
    }
    setWinner(winner) {
        if (this.winner == "Calvin" || this.winner == "Hobbes") {
            this.winner = winner;
        }
        else {
            this.winner = "Csak Calvin vagy Hobbes lehet";
        }
    }
    getDate() {
        return this.date;
    }
    setDate(date) {
        this.setDate = Date;
    }
    result() {
        return "Calvinball: " + this.points;
    }
}
exports.Calvinball = Calvinball;
