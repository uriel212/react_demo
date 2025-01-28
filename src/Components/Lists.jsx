const Lists = () => {
    const users = [
        {username: "uriel212", email: "ortizurielr70@gmail.com", age: 22, location: "GT"},
        {username: "demo" , email: "demo@demo.com", age: 22, location: "GT"},
        {username: "test", email: "test@test.com", age: 22, location: "GT"}
    ]
  return (
    <div>
        <h1>Current Users: </h1>
        <ul>
            {
                users.map((user, index) => (
                    <li key={index}>
                        <h3>Username: {user.username}</h3>
                        <p>Email: {user.email}</p>
                        <p>Age: {user.age}</p>
                        <p>Location: {user.location}</p>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Lists