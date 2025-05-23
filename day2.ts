import { readFileSync } from "fs";

const input = readFileSync("day2.txt", "utf-8").split("\n");

function isSafe(line: string) {
    const arr = line.split(" ").map(Number);
    let isIncrease = true;
    
    for (let i = 0; i < arr.length - 1; ++i) {

        if (arr[i] >= arr[i + 1]) {
            isIncrease = false;
            break;
        }
        if(Number(arr[i+1]) - Number(arr[i]) > 3) {
            isIncrease = false;
            break;
        }
    }
    let isDecrease = true;
    for (let i = 0; i < arr.length - 1; ++i) {
        if (arr[i] <= arr[i + 1]) {
            isDecrease = false;
            break;
        }
        if(Number(arr[i]) - Number(arr[i+1]) > 3) {
            isDecrease = false;
            break;
        }
    }
    return isIncrease || isDecrease;
}

let ans = 0;
input.forEach((line) => {
    if(isSafe(line)) {
        ans++;
    }
});

console.log(ans);


