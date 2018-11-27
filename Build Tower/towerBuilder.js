function towerBuilder(nFloors) {
    let array = []
    let array2 = []
    counter = 1;
    j = 0;
    for (i = 0; i < nFloors; i++){
        array[i] = ""
        while (j != counter) {
            array[i] += "*"
            j++;
        }
        j = 0;
        counter+=2;
    }
    
    for (j = nFloors-1; j > 0; j--){

    }

}

console.log(towerBuilder(3));