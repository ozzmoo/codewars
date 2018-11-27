// A Narcissistic Number is a number which is the sum of its own digits, 
// each raised to the power of the number of digits in a given base.
// In this Kata, we will restrict ourselves to decimal(base 10).
// The Challenge:
// Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

function narcissistic(value) {
    let stringArray = value.toString().split("")
    let sum = 0
    for (i = 0; i < stringArray.length; i++){
        sum+= Math.pow(+stringArray[i], stringArray.length) 
    }
    return sum == value
}

console.log(narcissistic(371))