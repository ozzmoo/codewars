// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
    let array = s.split(" ")
    let min = array[0]
    for (i = 0; i < array.length; i++){
        if (array[i].length < min.length)  
            min = array[i]
    }
    return min.length
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))