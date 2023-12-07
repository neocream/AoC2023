import * as fs from 'fs';

const input : string = fs.readFileSync('ex_input.txt', 'utf-8');
const textByLine = input.split('\n');

const seedToSoilIndex = (textByLine.indexOf('seed-to-soil map:\r'));
const soilToFertilizerIndex = (textByLine.indexOf('soil-to-fertilizer map:\r'));
const fertilizerToWaterIndex = (textByLine.indexOf('fertilizer-to-water map:\r'));
const waterToLightIndex = (textByLine.indexOf('water-to-light map:\r'));
const lightToTemperatureIndex = (textByLine.indexOf('light-to-temperature map:\r'));
const temperatureToHumidityIndex = (textByLine.indexOf('light-to-temperature map:\r'));
const humidityToLocationIndex = (textByLine.indexOf('humidity-to-location map:\r'));

const seeds = textByLine[0].substring(textByLine[0].indexOf(': ')+1).split(' ').map((str) => parseInt(str.trim())).filter(Number);
const seedToSoil = makeArray(seedToSoilIndex, soilToFertilizerIndex);
const soilToFertilizer = makeArray(soilToFertilizerIndex, fertilizerToWaterIndex);
const fertilizerToWater = makeArray(fertilizerToWaterIndex, waterToLightIndex);
const waterToLight = makeArray(waterToLightIndex, lightToTemperatureIndex);
const lightToTemperature = makeArray(lightToTemperatureIndex, temperatureToHumidityIndex);
const temperatureToHumidity = makeArray(temperatureToHumidityIndex, humidityToLocationIndex);
const humidityToLocation = makeArray(humidityToLocationIndex, textByLine.length);

// make a 2D array of numbers using a start and end index
function makeArray(startIndex: number, endIndex: number) {
    let newArray = []
    for (var i = startIndex+1; i < endIndex-1; i++) {
        newArray.push(textByLine[i].split(' ').map((str) => parseInt(str)));
    }
    return newArray;
}

// returns the new number based on args passed in
function typeToType(sourceNum : number, destStart : number, sourceStart : number, rangeLen : number) {
    console.log(sourceNum);
    console.log(sourceStart);
    if (sourceNum >= sourceStart && sourceNum < sourceStart + rangeLen) {
        console.log(`${sourceNum} is in range of ${sourceStart} to ${sourceStart + rangeLen - 1}`);
    }
}

seeds.forEach(seed => {
    typeToType(seed, seedToSoil[0][0], seedToSoil[0][1], seedToSoil[0][2]);
});