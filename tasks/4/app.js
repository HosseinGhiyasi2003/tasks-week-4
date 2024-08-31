let myObject = {a:1, b:2};

function convertToArray(obj) {
  return Object.entries(obj)
}

console.log(convertToArray(myObject));
