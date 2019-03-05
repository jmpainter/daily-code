function addTwo(arr, k) {
  const map = {};
  for (let num of arr) {
    if (map[num]) {
      return true;
    } else {
      const otherNumber = k - num;
      map[otherNumber] = 1;
    }
  }
  return false;
}

console.log(addTwo([10, 15, 3, 7], 17));
console.log(addTwo([10, 15, 3, 7], 45));
