function minimumScore(nums, k) {
  const n = nums.length;
  const sortedNums = nums.sort((a, b) => a - b);
  
  const minVal = sortedNums[0];
  const maxVal = sortedNums[n - 1];
  
  if (k === 0) {
    return maxVal - minVal;
  }
  
  const candidates = [maxVal - minVal];
  
  for (let i = 1; i < n; i++) {
    const current = sortedNums[i];
    const prev = sortedNums[i - 1];
    
    const low = Math.min(minVal + k, current - k);
    const high = Math.max(maxVal - k, prev + k);
    
    candidates.push(high - low);
  }
  
  return Math.min(...candidates);
}

// Example usage:
const nums = [1];
const k = 0;
const minScore = minimumScore(nums, k);
console.log(minScore); 
