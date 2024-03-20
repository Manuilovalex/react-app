import Navigate from './Navigate'
import { PropContext } from '../App.jsx'

const About = () => {
  return (
    <PropContext.Consumer>
      {(propValue) => (
        <div>
          <h1>About</h1>
          <p>{propValue}</p>
          <Navigate destination="" />
          <Navigate destination="contacts" />
        </div>
      )}
    </PropContext.Consumer>
  )
}

export default About
