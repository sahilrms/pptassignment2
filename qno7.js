const nums = [1, 2, 3, 4, 5];
let increasing = true;
let decreasing = true;

for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
        increasing = false;
    }

    if (nums[i] > nums[i - 1]) {
        decreasing = false;
    }
}
console.log(increasing || decreasing);


