const isPrime = num => {
  let divisor = 2;

  while (num > divisor) {
    if (num % divisor === 0) {
      return false;
    } else {
      divisor++;
    }
    return true;
  }
};
