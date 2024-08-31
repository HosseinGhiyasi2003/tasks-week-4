const array1=['shamim'];
const array2=['khezri'];

function mergeStoredArrays(arr1, arr2) {
  return [...arr1, ...arr2]
}

console.log(mergeStoredArrays(array1, array2));