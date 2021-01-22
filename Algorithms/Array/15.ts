/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  /** 1.先排序 */
  nums.sort((a, b) => a - b)
  // set 的用途為儲存不重複的值
  const set = new Set()
  // resultList 為解答
  const resultList = []
  /** 2.執行迴圈 */
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1
    let right = nums.length - 1

    while (right > left) {
      const sum = nums[i] + nums[left] + nums[right]
      // sum > 0 代表右邊較大的數字要變小, 所以 right--
      if (sum > 0) {
        right--
        // sum < 0 代表左邊較小的數字要變大, 所以 left++
      } else if (sum < 0) {
        left++
      } else {
        // sum = 0 的時候, 記下三個數字
        let result = `${nums[i]}${nums[left]}${nums[right]}`
        // 判斷是否有重複, 沒重複才存進 resultList
        if (!set.has(result)) {
          set.add(result)
          resultList.push([nums[i], nums[left], nums[right]])
        }
        // 如果只改變一邊, 只會得到更多重複的組合
        left++
        right--
      }
    }
  }
  return resultList
}

threeSum([-1, 0, 1, 2, -1, -4])
