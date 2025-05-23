import { readFileSync } from "fs";

const input = readFileSync("day2.txt", "utf-8").split("\n");

function isSafe(arr: number[]) {

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
function isSafeWithDampener(arr: number[]) {

    // Check if the original report is safe
    if (isSafe(arr)) {
        return true; // Already safe
    }

    // Check by removing one level at a time
    for (let i = 0; i < arr.length; ++i) {
        const modifiedArr = arr.slice(0, i).concat(arr.slice(i + 1)); // Remove the i-th element
        if (isSafe(modifiedArr)) {
            return true; // Safe after removing one level
        }
    }

    return false; // Not safe even after removing one level
}
let ans = 0;
input.forEach((line) => {
    const arr = line.split(" ").map(Number);
    if(isSafe(arr)) {
        ans++;
    }
});

let ans2 = 0;
input.forEach((line) => {
    const arr = line.split(" ").map(Number);
    if (isSafeWithDampener(arr)) {
        ans2++;
    }
});

console.log(ans, ans2);


