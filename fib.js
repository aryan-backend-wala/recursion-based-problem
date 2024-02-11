const fib = (n) => {
  if(n <= 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

const _print = fib(4);
console.log(_print);
