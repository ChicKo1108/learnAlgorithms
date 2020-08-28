/**
 * @param {number[]} nums
 * @return {number}
 */
var massage = function (nums) {
  if (nums.length == 0) return 0;
  const dp = [];
  // 创建二维数组
  for (let i = 0; i < nums.length; i++) {
    dp[i] = [0, 0];
  }
  // 边界条件
  dp[0][0] = 0;
  dp[0][1] = nums[0];
  console.log(dp);
  for (let i = 1; i < nums.length; i++) {
    // 状态转移方程
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
    dp[i][1] = dp[i - 1][0] + nums[i];
  }
  return Math.max(dp[nums.length - 1][0], dp[nums.length - 1][1]);
};

console.log(massage([2, 1, 4, 5, 3, 1, 1, 3]));
