
const nums = [1, 3, 2, 2, 5, 2, 3, 7];
const freqMap = new Map(); //to map frequency of all numbers
let maxLen = 0;
// setting frequency of each num 
for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
}

//find frequency of each number and set their current and next
for (const num of nums) {
    const currFreq = freqMap.get(num);
    const nextFreq = freqMap.get(num + 1);

    if (nextFreq) {
        maxLen = Math.max(maxLen, currFreq + nextFreq);
    }

    const prevFreq = freqMap.get(num - 1);

    if (prevFreq) {
        maxLen = Math.max(maxLen, currFreq + prevFreq);
    }
}
console.log(maxLen);



