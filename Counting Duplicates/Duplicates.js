var set = new Set()

function duplicateCount(text) {
    array = text.toLowerCase().split("");
    for (i = 0; i < array.length; i++){
        set.add(array[i])
    }
    setArray = Array.from(set)
    counter = 0
    result = 0
    for (i = 0; i < setArray.length; i++){
        for(j = 0; j < array.length; j++){
            if (setArray[i] === array[j]){
                counter++
            }
        }
        if (counter > 1) {
            result++
        }
        counter = 0
    }
    return result
}

