function toUnderscore(string) {
    string = string.toString()
    let newString = ''
    for (i = 0; i < string.length; i++){
        if (string.charCodeAt(i + 1) >= 65 && string.charCodeAt(i+1) <=90)
            newString +=  string[i].toLowerCase() + "_"
        else 
            newString += string[i].toLowerCase()
    }
    return newString
}

console.log(toUnderscore("ToLower3Case"))