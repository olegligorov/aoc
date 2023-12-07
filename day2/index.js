import fs from 'fs';

const lines = fs.readFileSync('test.txt', 'utf-8').trim().split('\n').map(x => x.trim());

console.log(lines)

function part1() {
let idSUm = 0

    lines.forEach(line => {
        let isValidGame = true;

        let gameName, gameList;
        [gameName, gameList] = line.split(":");
        const gameId = gameName.split(" ")[1];

        const gameSubsets = gameList.split("; ");
        console.log(gameId, gameSubsets);

        for (const gameSubset of gameSubsets) {
            const cubeList = gameSubset.split(", ");
            console.log(cubeList);

            let gameSubsetCubesCount = {
                "blue": 0,
                "red": 0,
                "green": 0,
            }

            for (const cube of cubeList) {
                if (cube.search("blue") != -1) {
                    gameSubsetCubesCount["blue"] = parseInt(cube.split(" blue")[0]);
                }
                if (cube.search("red") != -1) {
                    gameSubsetCubesCount["red"] = parseInt(cube.split(" red")[0]);
                }
                if (cube.search("green") != -1) {
                    gameSubsetCubesCount["green"] = parseInt(cube.split(" green")[0]);
                }
            }

            if (!(gameSubsetCubesCount["blue"] <= 14 && gameSubsetCubesCount["green"] <= 13 && gameSubsetCubesCount["red"] <= 12)) {
                isValidGame = false;
            }

            console.log(gameSubsetCubesCount);
        }

        if (isValidGame === true) {
            idSUm += parseInt(gameId);
        }
    })

console.log(idSUm);
}

function part2() {
    let sum = 0

    lines.forEach(line => {
        let gameName, gameList;
        [gameName, gameList] = line.split(":");

        const gameSubsets = gameList.split("; ");

        let gameMaxBlue = 0;
        let gameMaxRed = 0;
        let gameMaxGreen = 0;
        for (const gameSubset of gameSubsets) {
            const cubeList = gameSubset.split(", ");
            console.log(cubeList);
            

            for (const cube of cubeList) {
                if (cube.search("blue") != -1) {
                    const gameBlue = parseInt(cube.split(" blue")[0]);
                    gameMaxBlue = Math.max(gameMaxBlue, gameBlue);
                }
                if (cube.search("red") != -1) {
                    const gameRed = parseInt(cube.split(" red")[0]);
                    gameMaxRed = Math.max(gameMaxRed, gameRed);
                }
                if (cube.search("green") != -1) {
                    const gameGreen = parseInt(cube.split(" green")[0]);
                    gameMaxGreen = Math.max(gameMaxGreen, gameGreen);
                }
            }

            
        }
        
        sum += gameMaxBlue*gameMaxRed*gameMaxGreen
    })

    console.log(sum);
}

part2();