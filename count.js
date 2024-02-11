const count = (n) => {
  if(n <= 0) return 0;
  let counting = count(n - 1);
  return ++counting;
}

console.log(count(5));