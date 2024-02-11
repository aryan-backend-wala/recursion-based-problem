// fill array by iterative
const fill = (n) => {
  const arr = [];
  for(let i=0;i<=n;i++){
    arr.push(i);
  }
  return arr;
}

// fill array by recursive
const rfill = (n) => {
  if(n < 0) return [];
  let arr = rfill(n - 1);
  arr.push(n);
  return arr;
}

console.log(fill(5));
console.log(rfill(5));
