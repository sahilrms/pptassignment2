let nums=[1,2,1,12,0,1,33,12,4,9,3,44,5];
let sorted=nums.sort((a,b)=>a-b)
let maxProd= sorted[sorted.length-1]*sorted[sorted.length-2]*sorted[sorted.length-3];
console.log(maxProd)