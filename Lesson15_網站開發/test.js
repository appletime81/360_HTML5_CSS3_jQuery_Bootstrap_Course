// quick sort
// quick sort is a divide and conquer algorithm.
// it picks an element as pivot and partitions the given array around the picked pivot.
// quick sort can be implemented using 3 steps
// 1. pick a pivot element
// 2. partition the array around the picked pivot
// 3. recursively sort the sub-array on the left of the pivot and on the right of the pivot



function quickSort(arr, left, right) {
  if (left < right) {
    let pivot = partition(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
}

function partition(arr, left, right) {
    let pivot = arr[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        i++;
        swap(arr, i, j);
      }
    }
    swap(arr, i + 1, right);
    return i + 1;
};

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const arrayList = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
quickSort(arrayList, 0, arrayList.length - 1);


// print each element of the array
for (let i = 0; i < arrayList.length; i++) {
  console.log(arrayList[i]);
}