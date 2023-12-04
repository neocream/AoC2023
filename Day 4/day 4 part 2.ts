// DAY 4 PART 2
import * as fs from 'fs';

const input : string = fs.readFileSync('input.txt', 'utf-8');
const textByLine = input.split('\n');

// create array to hold number of cards at each position
// fill with 1 to begin
let totalCopies : number[] = new Array<number>(textByLine.length).fill(1);

textByLine.forEach((e, index) => {
    // remove "card #:"
    const element = e.substring(e.indexOf(': ')+1);
    
    // separate into lists of own numbers and winning numbers
    // also kill blanks and turns all strings into numbers
    const winningNum = element.split('|')[0].split(' ').map((n) => parseInt(n)).filter(Number);
    const ownNum = element.split('|')[1].split(' ').map((n) => parseInt(n)).filter(Number);

    let numOfCardsWon : number = 0;
    ownNum.forEach((num) => {
        if (winningNum.includes(num)) {
            numOfCardsWon += 1;
        }
    });

    for (var i = index + 1; i < textByLine.length && i < index + 1 + numOfCardsWon; i++) {
        totalCopies[i] += 1 * totalCopies[index]; 
    }
})
;
let sum : number = 0;
for (let i = 0; i < totalCopies.length; i++) {
    sum += totalCopies[i];
}
console.log(sum);
