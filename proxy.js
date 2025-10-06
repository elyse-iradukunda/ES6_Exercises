const user = { name: "Elyse" };

const proxyUser = new Proxy(user, {
  get(target, prop) {
    console.log(`Getting ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(`Setting ${prop} = ${value}`);
    target[prop] = value;
    return true;
  }
});

proxyUser.name;       // logs: Getting name
proxyUser.age = 30;   // logs: Setting age = 30
