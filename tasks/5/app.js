const MyObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
};

function calcNumbers(obj) {
  return Object.values(obj).reduce((sum, value) => {
    if (typeof value === 'number') {
      return sum + value;
    } else if (typeof value === 'object') {
      return sum + calcNumbers(value);
    }
    return sum;
  }, 0);
}

console.log(calcNumbers(MyObject));
























