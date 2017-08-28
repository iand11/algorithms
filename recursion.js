// Recursion

var fibonacci = num => {
  fibArray = [0, 1];
  if (num <= 2) {
    return fibArray;
  }
  for (i = 0; i < num; i++) {
    fibArray.push(fibArray[i] + fibArray[i + 1]);
  }
  return fibArray[num];
};

// fibonacci(10)

var factorial = num => {
  arrayToReduce = [];
  for (i = 1; i <= num; i++) {
    arrayToReduce.push(i);
  }
  return arrayToReduce.reverse().reduce(function(a, b) {
    return a * b;
  });
};

factorial(3);

var factorialRecursion = num => {
  if (num < 2) return 1;
  return num * factorial(num - 1);
};

factorialRecursion(4);

var reverse = arr => {
  reversedArray = [];

  var addItems = orderedArr => {
    if (orderedArr.length > 0) {
      reversedArray.push(orderedArr.pop());
      addItems(orderedArr);
    }
    return;
  };
  addItems(arr);
  return reversedArray;
};
