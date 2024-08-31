let text = 'Hello I am A Front-End Developer';
let text2 = 'll m Frnt-nd Dvlpr';

function containsVowle(text) {
  const vowels = 'aeiouAEIOU';
  return text.split('').some(char=> vowels.includes(char))
}

console.log(containsVowle(text));
console.log(containsVowle(text2));
