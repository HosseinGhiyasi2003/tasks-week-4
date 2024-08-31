// let MyObject = 
//   {
//   a: 1,
//   b: {
//     c:2,
//     d: {
//       e: 3
//     }
//   }
//   }

// function calcNumbers(obj) {
//   let sum = 0;
//   for (let key in obj) {
//     if (typeof obj[key] === 'number') {
//       sum+=obj[key];
//     } else if(typeof obj[key] === 'object') {
//       sum += calcNumbers(obj[key]);
//     }
//   }
//   return sum;
// }

// console.log(calcNumbers(MyObject));


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
























