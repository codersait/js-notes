// Reverse Word
const word = 'clarusway'
let reversedWord = ''

// First Way
for (i = word.length - 1; i >= 0; i--) {
  reversedWord += word.charAt(i)
}

// Second Way
reversedWord = [...word].reverse().join('')
