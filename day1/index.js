import fs from 'fs';

const lines = fs.readFileSync('myData.txt', 'utf-8').trim().split('\n');
// console.log(lines)

function firstPart() {
    let sum = 0

    for (const line of lines) {
        const lineList = [...line.trim()].filter(x => !isNaN(x)).map(x => Number(x))
        console.log(lineList);
        sum += lineList[0] * 10 + lineList[lineList.length - 1];
    }

    console.log(sum);
}

function secondPart() {
    const numbersMap = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
    };

    let sum = 0;
    const regex = /(one|two|three|four|five|six|seven|eight|nine|\d)/g;
    let i = 1;
    for (const line of lines) {
        let match;
        let numbers = [];
        while ((match = regex.exec(line)) !== null) {
            const num = match[0];
            numbers.push(match[0] in numbersMap ? numbersMap[num] : Number(match[0]))
            // numbers.push(match[0]);
        }
        console.log(`${i++}: ${numbers[0]} and ${numbers[numbers.length - 1]}`)
        sum += numbers[0] * 10 + numbers.pop();
    }
    console.log(sum);

}

secondPart();