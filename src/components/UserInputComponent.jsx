import { useState } from 'react'

const UserInputComponent = ({ data, setUserData }) => {
  const [userId, setUserId] = useState(1)
  const [error, setError] = useState(null)

  const handleInputChange = (event) => {
    setUserId(event.target.value)
    setError(null)
    setUserData(null)
  }

  const handleButtonClick = async () => {
    try {
      if (userId < 1 || userId > data.length) {
        throw new Error(`There are no user with id: ${userId}`)
      }
      const selectedUserId = parseInt(userId)
      const selectedUser = data.find((user) => user.id === selectedUserId)
      if (selectedUser) {
        setUserData(selectedUser)
      }
    } catch (error) {
      console.error('Error fetching user data:', error.message)
      setError(error)
      setUserData(null)
    }
  }

  return (
    <div>
      <input type="number" value={userId} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Enter</button>
      {error && <p className="error">Error: {error.message}</p>}
    </div>
  )
}

export default UserInputComponent
