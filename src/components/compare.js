async function getUsers() {
    const data = await fetch('https://randomuser.me/api/?page=1&results=50&seed=abc').then((response) => response.json())
    console.log(data);
  
    setUsers(data.results)
    setLoading(false)
  }
