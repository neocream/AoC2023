// day 2
import * as fs from 'fs';

let gameNum : number = 0;

const input : string = fs.readFileSync('input.txt', 'utf-8');
const textByLine = input.split('\n');


for (let i = 0; i < textByLine.length; i++) {
    // element is whole line, ex:
    // 12 green, 13 blue, 2 red; 4 red, 14 green, 1 blue; 11 red, 15 green, 5 blue; 15 green, 9 red; 4 blue, 1 red, 5 green; 10 red, 20 green, 13 blue

    // remove "game #:"
    let element = textByLine[i].substring(textByLine[i].indexOf(': ')+1);
    // split by ; 
    let splitEle = element.split(';');

    // hold max values
    let blueMax : number = 0;
    let redMax : number = 0;
    let greenMax : number = 0;

    splitEle.forEach((row) => {
        // row is single section in a line, ex:
        // 12 green, 13 blue, 2 red

        row.split(',').forEach((ele) => {
            // ele is single number and colour combo, ex:
            // 12 green
            const number : number = parseInt(ele.split(' ')[1]);
            const colour : string = ele.split(' ')[2];
            if (colour == 'blue') {
                blueMax = number > blueMax ? number : blueMax;
            }
            else if (colour == 'red') {
                redMax = number > redMax ? number : redMax;
            }
            else if (colour == 'green'){
                greenMax = number > greenMax ? number : greenMax;
            }
        });
    })
    // now power that shit
    gameNum += (blueMax * greenMax * redMax);
}
console.log(gameNum);