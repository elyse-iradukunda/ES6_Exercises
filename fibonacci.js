function * Naming(limit){
    let a =0;
    let b= 1;
    let counter =0; 
    while(counter < limit){
        yield a;
        [a,b]=[b,a+b];
        counter++;
    }
}
for( let i of Naming(19)){
            console.log(i)
}
