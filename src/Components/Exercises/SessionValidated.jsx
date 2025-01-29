const SessionValidated = ({isAdmin}) => {
  return (
    isAdmin ? <h1>Welcome Admin :D</h1> : <h1>Welcome User</h1>
  )
}

export default SessionValidated