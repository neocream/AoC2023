// DAY 3 PART 1
import * as fs from 'fs';

// given array of machine 
// return array of indexes which are parts
function returnParts(part: string) {
    const regex = /[^(\d)|.|]/g;
    let match;
    let indexes : number[] = [];

    while ((match = regex.exec(part)) != null) {
        // console.log(typeof(match.index));
        // console.log(part[match.index]);
        indexes.push(match.index);
    }
    return indexes;
}

// given index of the row of textByLine
// return array of indexes for rows to check
function getIndexesToCheck(index: number, max: number) {
    let rows : number[] = [];
    if (index - 1 > -1) { rows.push(index - 1); }
    rows.push(index);
    if (index + 1 < max) { rows.push(index + 1); }
    return rows;
}

// given index of part, and indexes of surrounding rows to check
// iterate through every surrounding row to check 
// add them all 
function addNumbers(part_index : number, rows : number[]) {
    rows.forEach((y_index) => {
        let columns : number[] = getIndexesToCheck(part_index, textByLine[y_index].length);
        columns.forEach((x_index) => {
            totalNum = !Number.isNaN(parseInt(textByLine[y_index][x_index])) ? totalNum += parseInt(textByLine[y_index][x_index]) : totalNum;
        })
    })
}

const input : string = fs.readFileSync('input.txt', 'utf-8');
const textByLine = input.split('\n');

// first call getIndexes with index = current textbyline row, max = textbyline.length
// for each symbol index to check, call getIndexes with index = symbol, max = textbyline[i].length
// assuming each part number will only be used by one symbol, otherwise it will recount that part 

let totalNum : number = 0;

for (var i = 0; i < textByLine.length; i++) {
    // retrieve list of indexes of all symbols in current line
    const partsIndexes : number[] = returnParts(textByLine[i]);
    // first get which rows I should be checking for current index
    const rowsToCheck : number[] = getIndexesToCheck(i, textByLine.length);

    // console.log(i);
    // do this for each part (symbol)
    // part_i is the index of the part
    partsIndexes.forEach((part_i) => {
        // console.log(rowsToCheck);
        addNumbers(part_i, rowsToCheck);
    })
}

console.log(totalNum);