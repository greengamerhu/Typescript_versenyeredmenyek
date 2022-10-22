import { Results } from "./Results";

export class Football implements Results {
    winner: string;
    date: Date;
    #golokSzama : number;
    #enemyGolok : number;
    
    constructor(winner: string, date: Date, golokSzama : number, enemyGolok : number) {
        this.winner = winner;
        this.date = date;
        this.#golokSzama = golokSzama;
        this.#enemyGolok = enemyGolok
    }
    getWinner(): string {
        return this.winner;
    }
    setWinner(winner: string): void {
        this.winner = winner;
    }
    getDate(): Date {
       return this.date;
    }
    setDate(date: Date): void {
        this.setDate = Date;
    }

    result(): string {
        return "Football match: " + this.#golokSzama + "-" + this.#enemyGolok
    }

}