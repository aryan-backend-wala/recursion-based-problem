const sum = (n) => {
  if(n === 0){
    return 0;
  } else {
    return n + sum(n-1); 
  }
}

const _print = sum(3);
console.log(_print);