// Complete the function scramble(str1, str2) that returns true if a portion of str1 
// characters can be rearranged to match str2, otherwise returns false.

function scramble(str1, str2) {
    var count = Object.create(null);

    Array.prototype.forEach.call(str1, function (a) {
        count[a] = (count[a] || 0) + 1;
    });

    return Array.prototype.every.call(str2, function (a) {
        return count[a]--;
    });
}

console.log(scramble('rkqodlw', 'world'))