const ExerciseLists = () => {

    const users = [
        { id: 1, username: "uriel212", email: "demo@demo.com" },
        { id: 2, username: "demo", email: "demo2@demo.com" },
        { id: 3, username: "test", email: "test@demo.com" }
    ]

    return (
        <div>
            <h1>Current Users: </h1>
            <ul>
                {
                    users.map(({id, username, email}) => (
                        <li key={id}>
                            <h3>Username: {username}</h3>
                            <p>Email: {email}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ExerciseLists