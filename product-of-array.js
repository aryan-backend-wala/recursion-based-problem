const product_of_array = (arr, n) => {
  if(n <= 0){
    return 1;
  } else {
    return arr[n - 1] * product_of_array(arr, n - 1);
  }
}

const arr = [9, 2];
const n = arr.length;
const _print = product_of_array(arr, n);
console.log(_print);