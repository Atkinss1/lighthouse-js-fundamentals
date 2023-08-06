function isOdd(num) {
  if (num % 2 === 0) {
    let notOdd = num + " is not odd.";
    return notOdd;
} else {
  let odd = num + " is odd."
  return odd;
};
}

console.log(isOdd(23));
console.log(isOdd(38));