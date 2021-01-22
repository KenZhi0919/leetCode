/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  /** 先排序 */
  nums.sort((a, b) => a - b)
  // set 的用途為儲存不重複的值
  const set = new Set()
  // resultList 為解答
  const resultList = []
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let k = j + 1
      let l = nums.length - 1
      while (l > k) {
        const sum = nums[i] + nums[j] + nums[k] + nums[l]
        // sum > 0 代表右邊較大的數字要變小, 所以 l--
        if (sum > target) {
          l--
          // sum < 0 代表左邊較小的數字要變大, 所以 k++
        } else if (sum < target) {
          k++
        } else {
          // result = target 的時候, 記下數字
          const result = `${nums[i]}${nums[j]}${nums[k]}${nums[l]}`
          // 判斷是否有重複, 沒重複才存進 resultList
          if (!set.has(result)) {
            set.add(result)
            resultList.push([nums[i], nums[j], nums[k], nums[l]])
          }
          // 如果只改變一邊, 只會得到更多重複的組合
          k++
          l--
        }
      }
    }
  }
  return resultList
}
