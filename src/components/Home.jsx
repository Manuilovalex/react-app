import Navigate from './Navigate'
import Counter from './Counter'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Counter />
      <Navigate destination="about" />
      <Navigate destination="contacts" />
    </div>
  )
}

export default Home
