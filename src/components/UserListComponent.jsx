const UserList = ({ users }) => {
  
  return (
    <div>
      <h2>Data handling</h2>
      <ul className="userList">
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
