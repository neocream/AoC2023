// DAY 1
import * as fs from 'fs';

const input : string = fs.readFileSync('input.txt', 'utf-8');
const textByLine = input.split('\n');
let result : number = 0;
textByLine.pop();

for (let i = 0; i < textByLine.length; i++) {
    const element = textByLine[i];
    let currentNum : string = ''

    // match for first number in string
    let regex = new RegExp('([0-9])');
    let match = regex.exec(element);
    let firstNumIndex : number = match.index;

    // match for first stringNumber in string
    regex = new RegExp('(one|two|three|four|five|six|seven|eight|nine)');
    match = regex.exec(element);
    let firstStrIndex : number;
    if (match) {
        firstStrIndex = match.index;
    } else {
        firstStrIndex = 999;
    }

    let firstIndex = Math.min(firstNumIndex, firstStrIndex)

    console.log(element[firstIndex]);
    // match for last number in string
    // regex = new RegExp('(\\d)(?!.*\\d)');
    // match = regex.exec(element);
}

