function longest(s1, s2) {
    let array = unique((s1 + s2).split("").sort())

    return array.join("")
}

function unique(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        obj[str] = true; 
    }

    return Object.keys(obj); 
}
