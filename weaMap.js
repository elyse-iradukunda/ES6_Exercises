  let maps= new WeakMap();
  maps.set({age:30},9);
  maps.set({age:50},16);
  maps.set({age:60},"irael");
  maps.set({age:30},"iradukunda chery valence");
  for( [key,value] in maps){
      console.log(value)
  }