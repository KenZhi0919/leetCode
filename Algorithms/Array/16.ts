/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  /** 先排序 */
  nums.sort((a, b) => a - b)
  /** 設一個無限大的結果 */
  let result = Infinity
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1
    let right = nums.length - 1
    while (right > left) {
      let tempTotal = nums[i] + nums[left] + nums[right]
      /** 比較 */
      if (Math.abs(tempTotal - target) < Math.abs(result - target)) {
        result = tempTotal
      }
      if (tempTotal > target) {
        right--
      } else {
        left++
      }
    }
  }

  return result
}
