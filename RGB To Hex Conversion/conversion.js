function rgb(r, g, b) {
    
    return (checker(r) + checker(g) + checker(b)).toUpperCase()
}

function checker(x){
    if (x > 255){
        x = 255
        return x.toString(16)
    }

    else if (x < 0)
        return '00'
    else if (x >= 0 && x < 10)
        return '0' + x.toString(16)
    else
        return x.toString(16)
}

console.log(rgb(300, 255, 255))