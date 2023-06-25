let arr=[1,2,3,4];
let pairs=[];
let minPairs=[];
let i,j;
//making pairs 
for(i=0;i<arr.length-1;i++){
    for(j=i+1;j<arr.length;j++){
        let temp=[arr[i],arr[j]];
        pairs.push(temp)
    }
}
i=0;
j=pairs.length-1;
//finding pairs 
while(i<=j){
minPairs.push(Math.min(...pairs[i])+Math.min(...pairs[j]));
i++;
j--; 
}
let maximized=Math.max(...minPairs)
console.log(maximized)