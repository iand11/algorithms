var fizzBuzz = function(num) {
  if ((num % 5 === 0) & (num % 3 === 0)) {
    return 'Fizz Buzz';
  } else if (num % 5 === 0) {
    return 'Buzz';
  } else if (num % 3 === 0) {
    return 'Fizz';
  } else {
    return num.toString();
  }
};

var evenLast = function(data) {
  if (data.length === 0) {
    return 0;
  } else {
    var evenNumbers = [];
    for (i = 0; i < data.length; i++) {
      if (i % 2 === 0) {
        evenNumbers.push(data[i]);
      }
    }

    var total = evenNumbers.reduce(function(sum, value) {
      return sum + value;
    }, 0);
    var last = data[data.length - 1];
    total = total * last;
    return total;
  }
};

var findMessage = function(data) {
  var array = [];
  var letters = data.split('');
  letters.forEach(function(item) {
    if (item === item.toUpperCase(item) && item.match(/[a-z]/i)) {
      array.push(item);
    }
  });
  return array.join('');
};
