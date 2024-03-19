import Navigate from './Navigate'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Navigate destination="about" />
      <Navigate destination="contacts" />
    </div>
  )
}

export default Home
