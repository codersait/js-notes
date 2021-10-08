// Reverse Word
const word = 'clarusway';
let reversedWord = '';

// First Way
for (i = word.length - 1; i >= 0; i--) {
  reversedWord += word.charAt(i);
  // reversedWord += word[i];
}

// console.log(reversedWord);

// Second Way

reversedWord = [...word].reverse().join('');
reversedWord = word.split('').reverse().join('');

console.log(word.slice(1, 5));
// console.log(word.split(''));
