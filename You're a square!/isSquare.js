var isSquare = function (n) {
    
    return isInteger(Math.sqrt(n))

}

function isInteger(num) {
    return (num ^ 0) === num;
}

console.log(isSquare(25))
console.log(isSquare(155))
console.log(isSquare(144))