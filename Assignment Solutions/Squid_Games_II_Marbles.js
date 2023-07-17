// Calculate the total sum of all the marbles
let totalSum = 0;
for (let i = 0; i < n; i++) {
  totalSum += Arr[i];
}

// Create a memoization table to store the results of subproblems
const memo = new Array(n + 1)
  .fill(null)
  .map(() => new Array(totalSum + 1).fill(null));

// Helper function to check if the current player wins or loses
function canWinHelper(currentMarbleIndex, currentSum) {
  if (currentSum === 0) {
    // If the sum of removed marbles is zero, the current player loses
    return false;
  }

  if (currentMarbleIndex === n) {
    // If there are no remaining marbles, the current player wins
    return true;
  }

  if (memo[currentMarbleIndex][currentSum] !== null) {
    // If the result is already computed, return from the memoization table
    return memo[currentMarbleIndex][currentSum];
  }

  // Try removing each marble and check if the opponent loses
  for (let i = currentMarbleIndex; i < n; i++) {
    if (canWinHelper(i + 1, currentSum - Arr[i]) === false) {
      // If the opponent loses, the current player wins
      memo[currentMarbleIndex][currentSum] = true;
      return true;
    }
  }

  // If all possibilities lead to opponent's win, the current player loses
  memo[currentMarbleIndex][currentSum] = false;
  return false;
}

return canWinHelper(0, totalSum);
