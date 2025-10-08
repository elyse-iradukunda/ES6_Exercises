// Write a function that takes an object as input and returns a new object with all the key-value pairs reversed (keys become values and values become keys)
// const originalObj = {aa: "1", bf: "3", cq: "5"};
// const reversedObj = reverseObject(originalObj);
// // console.log(reversedObj); 
// output: {"1": 'aa', "3": 'bf', "5": 'cq'} // Expected output

const reverseObject =(originalObj)=>{
    
    let arr =[]
    for( let key in originalObj){
    //   console.log(key)
    //   console.log(originalObj[key])

        console.log({ "a" :`${key}`})
        
        return arr.push(key,)
    }

 
}

reverseObject({aa: "1", bf: "3", cq: "5"})