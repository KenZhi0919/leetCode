/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  /** 1. 先合併 & 排序 */
  const combinedArr = [...nums1, ...nums2].sort((a, b) => a - b)
  /** 2. 判斷長度為基數或偶數 */
  const isOdd = combinedArr.length % 2
  const mid = combinedArr.length / 2
  /** 3. 長度為基數回傳中間值 */
  if (isOdd) {
    return combinedArr[Math.floor(mid)]
  } else {
    /** 4. 長度為偶數回傳中間兩數相加除以2 */
    return (combinedArr[mid - 1] + combinedArr[mid]) / 2
  }
}
