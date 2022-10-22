import { Results } from "./Results";
import { Football } from "./Football";
import { Marathon } from "./Marathon";
import { Calvinball } from "./Calvinball";

let maiDatum : Date = new Date()

let f1 : Football = new Football("Barmelyik mb 1-es csapat", maiDatum, 10, 1)
let f2 : Football = new Football("BiszemB*szaom", maiDatum, 3, 2)
let m1 : Marathon = new Marathon("Random Etiop", maiDatum , 70)
let m2 : Marathon = new Marathon("Random Fehér ember", maiDatum, 900)
let c1 : Calvinball = new Calvinball("Calvin", new Date("2000"))
let c2 : Calvinball = new Calvinball("Hobbes", maiDatum)
let resultArray : Results[] = [];
resultArray.push(f1, f2, m1, m2, c1, c2) 
resultArray.forEach(e => console.log(e.result()))

console.log("------------------------------------------------------------------------------------------------");
for (let a of resultArray) {
    if (a instanceof  Calvinball) { 
        if (a.getWinner() == "Calvin") {
            console.log(a.result())
        }
    }
    else {
        console.log(a.result())
    }
}
console.log("------------------------------------------------------------------------------------------------");

resultArray.sort((a, b) => (a.getDate().getTime()) - b.getDate().getTime())

for (let a of resultArray)  {
    console.log(a.getDate() )
}