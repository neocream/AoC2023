// DAY 4 PART 1
import * as fs from 'fs';

const input : string = fs.readFileSync('input.txt', 'utf-8');
const textByLine = input.split('\n');

let points : number = 0;

textByLine.forEach((e) => {
    // remove "card #:"
    let element = e.substring(e.indexOf(': ')+1);
    
    // separate into lists of own numbers and winning numbers
    // also kill blanks and turns all strings into numbers
    const winningNum = element.split('|')[0].split(' ').map((n) => parseInt(n)).filter(Number);
    const ownNum = element.split('|')[1].split(' ').map((n) => parseInt(n)).filter(Number);

    let matching : number = 0;
    ownNum.forEach((num) => {
        if (winningNum.includes(num)) {
            matching += 1;
        }
    })
    points = matching > 1 ? points + (1 * Math.pow(2, matching-1)): points + matching; 
})
console.log(points);