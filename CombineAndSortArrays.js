a = [1, 4, 7, 8];
b = [2, 8, 5, 10];

a = a.concat(b);

const removeDuplicates = arr => {
  let noDuplicates = [];
  for (let i = 0; i < arr.length; i++) {
    if (!noDuplicates.includes(arr[i])) {
      noDuplicates.push(arr[i]);
    }
  }
  return noDuplicates;
};

a = removeDuplicates(a);

const insertSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        var spliced = arr.splice(i, 1);
        arr.splice(j, 0, spliced[0]);
      }
    }
  }
  return arr;
};

insertSort(a);
