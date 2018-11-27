// Write a function, which takes a non - negative integer(seconds) as input
// and returns the time in a human - readable format(HH: MM: SS)

function humanReadable(seconds) {
    let h, m, s, str = "";
    if (seconds == 0)
        return "00:00:00"
    else{
        h = Math.floor(seconds / 3600)
        seconds = seconds - h * 3600
        m = Math.floor(seconds / 60);
        seconds = seconds - m * 60
        s = seconds
    }
    
    if (h>=0 && h <10)
        str+="0" + h + ":"
    else
        str+=h+":"
    if (m >= 0 && m < 10)
        str += "0" + m + ":"
    else
        str += m + ":"
    if (s >= 0 && s < 10)
        str += "0" + s 
    else
        str += s 
    return str
        
}

console.log(humanReadable(359999))
