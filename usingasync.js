 async function FetchIt(){
     
    try{
        
        const data1 = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        data1.json()
        console.log(data1);

    }
    catch(error){
         console.error('The error is this',error)
    }
 }
 
 FetchIt();