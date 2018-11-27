// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1. 
// If the string does not end with a number the number 1 should be appended to the new string.

function incrementString(strng) {
    let numberString = ""
    let wordsString = ""
    let array = strng.split("")

    for(i = 0; i < array.length; i++){
        if (isNaN(array[i]))
            wordsString+=array[i]
        else
            numberString+=array[i]
    }
    
    if (numberString != "")
        return wordsString + zero(numberString)
    else
        return wordsString + "1"
    
}

function zero(a){
    b = parseInt(a) / Math.pow(10, a.length)
    console.log(b)
    c = b + 1 / Math.pow(10, a.length)
    console.log(c)
    if (parseInt(c) == 1){
        t = c * Math.pow(10, a.length)
        return t.toString()//.substring(2)
    }
    else
        return c * Math.pow(10, a.length).toString().substring(2)
}

console.log(zero("099"))

//console.log(incrementString("foobar099"))

//Не работает

// function incrementString(strng) {
//     //separateing number from string
//     let x = (strng).replace(/^\D+/g, '');
//     //getting the length of original number from the string
//     let len = x.length;

//     //getting the string part from strng
//     str = strng.split(x);

//     //incrementing number by 1
//     let number = Number(x) + 1 + '';

//     //padding the number with 0 to make it's length exactly to orignal number
//     while (number.length < len) {
//         number = '0' + number;
//     }

//     //new string by joining string and the incremented number
//     str = (str + number).split(',').join('');
//     //return new string
//     return str;
// }