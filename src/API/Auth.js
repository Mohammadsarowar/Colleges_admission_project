//save user profile in db
export const saveUser = user => {
    const currentUser = {
      email: user.email,
    }
  
    fetch(`https://endgame-task-project-server.vercel.app/users/${user?.email}`, {
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
    const response = await fetch(`https://endgame-task-project-server.vercel.app/admission`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(roomData),
    });
    const result = await response.json();
    return result;
}

