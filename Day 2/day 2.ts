// day 2
import * as fs from 'fs';

const RED_MAX : number = 12;
const GREEN_MAX : number = 13;
const BLUE_MAX : number = 14;
let gameNum : number = 0;

const input : string = fs.readFileSync('input.txt', 'utf-8');
const textByLine = input.split('\n');


for (let i = 0; i < textByLine.length; i++) {
    // remove "game #:"
    let element = textByLine[i].substring(textByLine[i].indexOf(': ')+1);
    // slipt ; into array
    let splitEle = element.split(';');
    // console.log(i); 
    let illegal : boolean = false;
    
    console.log(element);
    // element: 
    // 

    splitEle.forEach((row) => {
        // 
        if (illegal) {
            return;
        }

        row.split(',').forEach((ele) => {
            let number : number = parseInt(ele.split(' ')[1]);
            let colour : string = ele.split(' ')[2];
            if (colour == 'green' && number > GREEN_MAX) { 
                illegal = true;
            } 
            else if (colour == 'blue' && number > BLUE_MAX) {
                illegal = true;
            }
            else if (colour == 'red' && number > RED_MAX) {
                illegal = true;
            }
        });
    })
    if (!illegal) {
        gameNum += i+1;
    }
}
console.log(gameNum);