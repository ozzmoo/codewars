// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

var set = new Set;

function findOdd(A) {
    let count = 0
    let number = null

    for (i = 0; i < A.length; i++){
        set.add(A[i])
    }
    let setArr = Array.from(set)

    for (i = 0; i < setArr.length; i++){
        for (j = 0; j < A.length; j++){
            if (setArr[i] === A[j]){
                count++
                number = setArr[i]
            }
        }
             
        if (count % 2 != 0){
            return number
        }
        number = null
        count = 0
    }
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))