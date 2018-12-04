// Write a class that, when given a string, will return an uppercase string with each letter shifted 
// forward in the alphabet by however many spots the cipher was initialized to.
// If something in the string is not in the alphabet(e.g.punctuation, spaces), simply leave it as is.
// The shift will always be in range of[1, 26].

// var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
// c.encode('Codewars'); // returns 'HTIJBFWX'
// c.decode('BFKKQJX'); // returns 'WAFFLES'


class CaesarCipher {
    constructor(n){
        this.shift = n
        this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    }
    encode(word) {
        let shift = this.shift
        let result = ''
        let upWord = word.toUpperCase()
        let temp = 0;
        for (let i = 0; i < upWord.length; i++) {
            for (let j = 0; j < this.alphabet.length; j++) {
                if (this.alphabet[j] == upWord[i]) {
                    temp++
                    if (shift > this.alphabet.length - 1 - j) {
                        result += this.alphabet[shift - (this.alphabet.length - j)]
                    } else {
                        result += this.alphabet[j + shift]
                    }
                    
                } 
            }
            if (temp == 0)   
                result += upWord[i]
            temp = 0
        }
        return result
    }

    decode(word) {
        let shift = this.shift
        let result = ''
        let upWord = word.toUpperCase()
        let temp = 0
        for (let i = 0; i < upWord.length; i++) {
            
            for (let j = 0; j < this.alphabet.length; j++) {
                if (this.alphabet[j] == upWord[i]) {
                    temp++
                    if (shift > this.alphabet.length - 1 - (this.alphabet.length - 1 - j)) {
                        result += this.alphabet[this.alphabet.length - (shift - j)]
                    } else {
                        result += this.alphabet[j - shift]
                    }
                }
            }
            if (temp == 0)
                result += upWord[i]
            temp = 0
            }
        return result
    }
}
var c = new CaesarCipher(5);
console.log(c.encode('vvvv')) 
console.log(c.decode('V7IZX')) 