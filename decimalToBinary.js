const decimalToBinary = (input) => {
  if(input === 0) return "";
  const dividend = Math.floor(input / 2);
  const remainder = input % 2;
  const str = decimalToBinary(dividend);
  return binary = str + remainder;
}

const input = 15;
console.log(decimalToBinary(input)); // 1111
 