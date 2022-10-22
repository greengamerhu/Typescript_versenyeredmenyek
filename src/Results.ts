export interface Results {
    winner: string;
    date : Date;
    getWinner(): string;
    setWinner(winner: string): void;
    getDate(): Date;
    setDate(date: Date): void;
    result(): string; 
}
