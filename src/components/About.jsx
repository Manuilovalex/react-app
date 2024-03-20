import Navigate from './Navigate'
import { useContext } from 'react'
import { PropContext } from '../App.jsx'

const About = () => {
  const propValue = useContext(PropContext)

  return (
    <div>
      <h1>About</h1>
      <p>{propValue}</p>
      <Navigate destination="" />
      <Navigate destination="contacts" />
    </div>
  )
}

export default About
