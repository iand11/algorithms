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

var threeWords = data => {
  var count = 0;

  data = data.split(' ');

  for (i = 0; i < data.length; i++) {
    if (data[i].match(/[a-zA-Z]/i)) {
      if (count === 3) {
        count = 3;
      } else {
        count++;
      }
    } else {
      if (count === 3) {
        count = 3;
      } else {
        count = 0;
      }
    }
  }
  if (count >= 3) {
    return true;
  } else {
    return false;
  }
};

var commonWords = (a, b) => {
  let common = [];
  a = a.split(',').concat(b.split(','));

  for (let i = 0; i < a.length; i++) {
    if (a.indexOf(a[i]) !== a.lastIndexOf(a[i])) {
      if (!common.includes(a[i])) {
        common.push(a[i]);
      }
    }
  }
  common.sort();
  return common.join(',');
};

function nonUniqueElements(data) {
  let noDup = [];
  for (let i = 0; i < data.length; i++) {
    if (data.indexOf(data[i]) !== data.lastIndexOf(data[i])) {
      noDup.push(data[i]);
    }
  }
  return noDup;
}

function median(data) {
  data.sort(function(a, b) {
    return a - b;
  });
  if (data.length % 2 === 1) {
    return data[(data.length - 1) / 2];
  }
  if (data.length % 2 === 0) {
    let evenMiddle = data.length / 2;
    return (data[evenMiddle] + data[evenMiddle - 1]) / 2;
  }
}
