const candyType = [1, 1, 2, 2, 3, 3,4,4,4,4];
const maxAllowed = candyType.length / 2;
const uniqueTypes = new Set(candyType);
console.log("Maximum number of different types of candies Alice can eat:", Math.floor(Math.min(maxAllowed, uniqueTypes.size)));