// The main idea is to count all the occuring characters(UTF - 8) in string.
// If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

// What if the string is empty ? Then the result should be empty object literal { }


function count(string) {
    let counter = {}
    for (i = 0; i < string.length; i++){
        // if (counter[string[i]]) {
        //     counter[string[i]]++
        // } else {
        //     counter[string[i]] = 1
        // }

        counter[string[i]] ? counter[string[i]]++ : counter[string[i]] = 1
    }
    return counter
}

console.log(count(""))