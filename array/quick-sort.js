'use strict'

/**
 * 拿到一个数组
 * 调用递归函数进行排序
 * @param  {Array} arr 排序前的数组
 * @return {Array}     排序后的数组
 */
function quickSort (arr) {
  /**
   * 排序的方法
   * 从数列中挑出一个元素，称为"基准"（pivot），
   * 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区结束之后，该基准就处于数列的中间位置。这个称为分区（partition）操作。
   * 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。
   * @param  {Number} begin 开始的下标
   * @param  {Number} len   结束的下标
   */
  function sort (begin, len) {
    let end = len - 1
    if (begin >= end) return

    let tag = arr[begin]
    let start = begin
    while (start < end) {
      for (; end > start; end--) {
        if (tag > arr[end]) {
          arr[start++] = arr[end]
          break
        }
      }
      for (; start < end; start++) {
        if (tag < arr[start]) {
          arr[end--] = arr[start]
          break
        }
      }
    }
    arr[start] = tag

    sort(0, start)
    sort(start + 1, len)
  }

  sort(0, arr.length)
  return arr
}

console.log(quickSort([2, 6, 3, 4, 6, 8, 3, 2, 9, 2, 5]))
// 如果正好数组第一个是最小的
// 第二个是最大的
// 循环的复杂度为n
// 继续递归调用的话，应该为n^n
// 如果
