
let obj ={
     name:'Ellyse',
     age:19,
     get NameGatter(){
         
         return this.name;
     },
     set NameSetter(value){
         this.name = value;
     }
}

obj.NameSetter="Irael"

console.log(obj.NameGatter)


function template(string,args){
    return string;
}

let name='irael'
let age=39
let string = template`hello ${name} and the client age is ${age}`
console.log(string)



