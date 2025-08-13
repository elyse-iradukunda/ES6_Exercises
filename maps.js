 let maps= new Map();
 
 maps.set(1,'Irael');
 maps.set(2,'Ellye');
 maps.set("hello word",'name');
 
 for(let [key, value] of maps){
     if(value == "Irael"){
         console.log(value)
     }
 }