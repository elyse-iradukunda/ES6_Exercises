const getch = async () => {
    const api = 'https://jsonplaceholder.typicode.com/users';
   const data = await fetch(api)
   const res = await data.json();
   console.log(res)
}

const result = await getch()
console.log(result)
