x = [1, 3, 1, 4, 3, 6, 6, 8, 4];

const removeDuplicates = nums => {
  noDuplicates = [];
  for (i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
      noDuplicates.push(nums[i]);
    }
  }
  return noDuplicates;
};

removeDuplicates(x);
