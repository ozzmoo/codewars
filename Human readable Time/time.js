// Write a function, which takes a non - negative integer(seconds) as input
// and returns the time in a human - readable format(HH: MM: SS)

function humanReadable(seconds) {
    var hours = parseInt(seconds / 3600);
    var minutes = parseInt(seconds / 60) % 60;
    var seconds = seconds % 60;

    var normalise = function (val) {
        return val < 10 ? "0" + val : val;
    }

    return normalise(hours) + ":" + normalise(minutes) + ":" + normalise(seconds);
}

console.log(humanReadable(359999))
console.log(humanReadable(60))
console.log(humanReadable(0))