let myObject = {
  a: 1,
  b: 2,
  c: 3
}
let myArray = ['a', 'c'];

function filterObjectProperties(myObject, myArray) {
  let filteredObject = {};
  myArray.forEach((item) => {
    if (item in myObject) {
      filteredObject[item] = myObject[item]
    }
  })
  return filteredObject;
}


console.log(filterObjectProperties(myObject, myArray));