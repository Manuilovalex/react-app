import { useState, useEffect } from 'react'
import axiosData from '../utils/api'
import renderUserData from './UserIdComponent'
import UserList from './UserListComponent'
import UserInputComponent from './UserInputComponent'

const ServerRequestComponent = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const axiosDataAndHandleErrors = async () => {
      try {
        setLoading(true)
        const data = await axiosData()
        setData(data)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    axiosDataAndHandleErrors()
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  return (
    <div className="container">
      <div className="container-userList">
        <UserList users={data} />
      </div>
      <div className="container-userInput">
        <h2>Please enter user id for details</h2>
        <UserInputComponent data={data} setUserData={setUserData} setError={setError} />
        {userData && (
          <div>
            <h3>User Details</h3>
            <div>{renderUserData(userData)}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ServerRequestComponent
