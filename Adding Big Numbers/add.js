function add(a, b) {
    let newB = ''
    let newA = ''

    if (a.length == b.length){
        newB = b
        newA = a
    } else if (a.length > b.length){
        temp = a.length - b.length
        for (i = 0; i < temp; i++){
            newB+= 0;
        }
        newB += b
        newA += a

    } else if (a.length < b.length){
        temp = b.length - a.length
        for (i = 0; i < temp; i++) {
            newA += 0;
        }
        newB += b
        newA += a
    }

    let numA = newA.split("")
    let numB = newB.split("")
    let result = ''
    i = numA.length - 1
    temp = 0

    while (i >= 0){
        sumOne = Number(numA[i]) + Number(numB[i])
        
        result += (sumOne + temp) % 10
        temp = Math.trunc((sumOne+ temp) / 10)
        i--
    }
    if (temp!=0){
        result+=temp
    }


    return reverseStr(result)
}


function reverseStr(str) {
    return str.split("").reverse().join("");
}


console.log (add("99", "11"))
console.log(add("3213", "4444"))
console.log(add("900990", "111111"))
console.log(add("100", "0"))
console.log(add("63829983432984289347293874", "90938498237058927340892374089"))

