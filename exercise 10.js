function generate(a) {
    let first,second,third
    let n = Math.random()
    if(n<0.33){
        first="crazy"
    }
    else if(n<0.66&&n>0.33){
        first="fire"
    }
    else{
        first="amazing"
    }
    n = Math.random()
    if(n<0.33){
        second="engine"
    }
    else if(n<0.66&&n>0.33){
        second="food"
    }
    else{
        second="garments"
    }
    n = Math.random()
    if(n<0.33){
        third="bros"
    }
    else if(n<0.66&&n>0.33){
        third="limited"
    }
    else{
        third="hub"
    }

    console.log(`${first} ${second} ${third}`)
}
generate()