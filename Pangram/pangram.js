// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
// because it uses the letters A - Z at least once(case is irrelevant).

var set = new Set

function isPangram(string) {
    let alphabet = "pqrstuvwxabcdefjhigklmnoyz".split("").sort()

    string = string.toLowerCase().split("")
    for (i = 0; i < string.length; i++){
        if (string[i] >= 'a' && string[i] <= 'z')
        set.add(string[i])
    }
    string = Array.from(set)
    string = string.sort()
    console.log(alphabet.join(""))
    console.log(string.join(""))
    return string.join("") == alphabet.join("");
}

console.log(isPangram("This is not a pangram."))
