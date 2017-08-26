a = [1, 3, 5, 9];
b = [2, 4, 6, 10];

const sortedArrays = (a, b) => {
  let sorted = [],
    aElm = a[0],
    bElm = b[0],
    aTracker = 1,
    bTracker = 1;

  while (aElm || bElm) {
    if (aElm < bElm) {
      sorted.push(aElm);
      aElm = a[aTracker++];
    } else {
      sorted.push(bElm);
      bElm = b[bTracker++];
    }
  }
  return sorted;
};

sortedArrays(a, b);
