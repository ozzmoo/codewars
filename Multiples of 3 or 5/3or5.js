function solution(number) {
    sum = 0;
    for (i = 1; i < number; i++){
        if(i % 5 == 0 || i % 3 == 0){
            sum+=i
        }
    }
    return sum
}

console.log(solution(10))