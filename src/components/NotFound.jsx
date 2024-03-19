import Navigate from './Navigate'

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <Navigate destination="home" />
      <Navigate destination="about" />
      <Navigate destination="contacts" />
    </div>
  )
}

export default NotFound
