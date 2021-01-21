/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let result = 0
  let rightIndex = height.length - 1
  let leftIndex = 0

  while (leftIndex < rightIndex) {
    /** 1. 找出左邊的高度和右邊的高度哪邊比較小 */
    let smallSideHeight = Math.min(height[leftIndex], height[rightIndex])
    /** 2.算出面積 */
    let area = (rightIndex - leftIndex) * smallSideHeight
    /** 3.比較面積 */
    if (result < area) {
      result = area
    }
    /** 4.留下較長的一邊 */
    if (height[leftIndex] > height[rightIndex]) {
      rightIndex--
    } else {
      leftIndex++
    }
  }
  return result
}
