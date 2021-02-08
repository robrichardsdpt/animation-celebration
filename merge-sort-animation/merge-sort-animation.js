const arrayOfBlocks = [0,1,2,3,4,5,6,7,8,9]

const mergeSort = (arr) => {
  if(arr.length <= 1) return arr
  let middle = Math.floor(arr.length/2)
  let leftArr = arr.slice(0, middle)
  let rightArr = arr.slice(middle, arr.length)
  return merge(mergeSort(leftArr), mergeSort(rightArr))
}

const merge = (left, right) => {
  const mergedArr = []
  let leftIndex = 0
  let rightIndex = 0
  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]){
      mergedArr.push(left[leftIndex])
      leftIndex++
    } else {
      mergedArr.push(right[rightIndex])
      rightIndex++
    }
  }
  return mergedArr.concat(left.slice(leftIndex), right.slice(rightIndex))
}