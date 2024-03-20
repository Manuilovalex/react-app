import Navigate from './Navigate'
import { PropContext } from '../App.jsx'

const Contacts = () => {
  return (
    <PropContext.Consumer>
      {(propValue) => (
        <div>
          <h1>Contacts</h1>
          <p>{propValue}</p>
          <Navigate destination="" />
          <Navigate destination="about" />
        </div>
      )}
    </PropContext.Consumer>
  )
}

export default Contacts
