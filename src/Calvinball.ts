import { Results } from "./Results";

export class Calvinball implements Results {
    winner: string;
    date: Date;
    points: number;
    constructor(winner: string, date : Date) {
        this.winner = winner;
        this.date = date;
        this.points = Math.random() * (101 - 10) + 10;
    }

    getWinner(): string {
        return this.winner;
    }
    setWinner(winner: string): void {
        if (this.winner == "Calvin" || this.winner == "Hobbes") {
            this.winner = winner;
        } else {this.winner = "Csak Calvin vagy Hobbes lehet"}

    }
    getDate(): Date {
       return this.date;
    }
    setDate(date: Date): void {
        this.setDate = Date;
    }

    result(): string {
        return "Calvinball: " + this.points;
    } 

}
    