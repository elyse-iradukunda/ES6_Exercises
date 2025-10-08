   const prom = new Promise((resolve,reject)=>{
        const wait=  setTimeout(()=>{
            console.log('Hello ')
        },1000)
        
        if(!wait){
            resolve('it has been solved succusesjjnkfuly');
            
        }
        else{
            reject('this has been rejected please try again later')
        }
   })

      const prom2 = new Promise((resolve,reject)=>{
        const wait=  setTimeout(()=>{
            console.log('Hello ')
        },2000)
        
        if(wait){
            resolve('it has been solved succusesf00uly');
            
        }
        else{
            reject('this has been rejected please try again later')
        }
        
   })
   
      const prom3 = new Promise((resolve,reject)=>{
        const wait=  setTimeout(()=>{
            console.log('Hello ')
        },3000)
        
        if(!wait){
            resolve('it has been solved succusesfu87ly');
            
        }
        else{
            reject('this has been rejected please try again later')
        }
   })
   
    Promise.any([prom,prom2,prom3]).then(message => console.log(message))
   