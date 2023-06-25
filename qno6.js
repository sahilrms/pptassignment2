let num = [-1, 0, 3, 5, 9, 12];
let item = 5;
let min = 0; max = num.length - 1;
while (max >= min) {
    let mid = Math.floor((max + min) / 2);
    if (num[mid] > item) {
        max = mid - 1;
    }
    else if (num[mid] < item) {
        min = mid + 1;
    }
    else if (num[mid] === item) {
        console.log(`${num[mid]}item found at index ${mid}`)
        break;
    }
}

if (max < min) {
    console.log(`${item} not found`)
}
