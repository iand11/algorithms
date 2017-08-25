var x = [4, 1, 0, 5];

const insertionSort = nums => {
  for (i = 1; i < nums.length; i++) {
    for (j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        var spliced = nums.splice(i, 1);
        nums.splice(j, 0, spliced[0]);
      }
    }
  }
  return nums;
};

insertionSort(x);
