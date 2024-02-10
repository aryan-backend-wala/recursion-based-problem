function fact(n){
  if(n === 1){
    return 1;
  } else {
    return n * fact(n-1);
  }
}

const _print = fact(5);
console.log(_print);