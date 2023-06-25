let beds=[1,0,0,0,0,1,0,0,0,1] 
let orginalBeds=[1,0,0,0,0,1,0,0,0,1];
let n=3;
let orginalN=n;
flag=true;
console.log(beds)
for(let slot=0;slot<beds.length-1;slot++){
    if(n>0){
        if(beds[slot]===0){
            if((beds[slot-1] != 1) && (beds[slot+1] != 1)){
                beds[slot]=1;
                n--;
            }
        }
    }
}
for(slot in beds){
    if(n===0) //if all plants are planted
    {
        if(slot===0) //if first slot
    {
        if(beds[slot]===1){
            if(beds[slot+1]===1){
                flag=false;
                break;
            }
        }
    }
    else if(slot===beds.length-1){
        if(beds[slot]===1){
            if(beds[slot-1]===1){
                flag=false;
                break;
            }
        }
    }
    else{
        if(beds[slot]===1){
            if((beds[slot-1]===1)||(beds[slot+1]===1)){
                flag=false;
                break;
            }
        }
    }
    }
    else{
        flag=false
    }
}
console.log(`for ${orginalBeds} setting up n = ${orginalN} is ${flag}`)
