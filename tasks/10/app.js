let Myarray = ['a', 'b', 'a', 'c', 'a', 'b']

function countDuplicates(array) {
  let countObj = {}
  array.forEach((item)=> {
    if(!countObj[item]) {
      countObj[item] = 1
    } else {
      countObj[item]++
    }
  })
  return countObj;
}

console.log(countDuplicates(Myarray));