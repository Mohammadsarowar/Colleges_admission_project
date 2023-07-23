//save user profile in db
export const saveUser = user => {
    const currentUser = {
      email: user.email,
    }
  
    fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(currentUser),
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  export const addAdmission = async (roomData) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/admission`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(roomData),
    });
    const result = await response.json();
    return result;
}

