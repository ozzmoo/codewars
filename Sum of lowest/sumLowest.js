function sumTwoSmallestNumbers(numbers) {
    return (numbers.sort(compareNumeric)[0] + numbers.sort(compareNumeric)[1])
};

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))