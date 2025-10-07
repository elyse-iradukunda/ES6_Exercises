const getch = async () => {
  try {
    const data = 'https://jsonplaceholder.typicode.com/users'
    const fetchi = await fetch(data)
    const user = await fetchi.json()
    return user.filter(elm => elm.id == 9)
  } catch {
    throw new Error('Data is not found!')
  }
}

const result = await getch()
console.log(result)
