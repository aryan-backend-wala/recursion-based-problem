const sum_of_array = (arr, n) => {
  if(n <= 0){
    return n;
  } else {
    return arr[n - 1] + sum_of_array(arr, n-1); 
  }
}

const arr = [1, 2, 3, 4, 5];
const n = arr.length;
const _print = sum_of_array(arr, n);
console.log(_print);