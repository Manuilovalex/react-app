import ControlledForm from './components/ControlledForm.jsx'
import ServerRequestComponent from './components/ServerRequestComponent.jsx'
import UncontrolledForm from './components/UncontrolledForm.jsx'

const App = () => {
  return (
    <div>
      <h1>React: Components, Hooks, and Data Handling</h1>
      <ControlledForm />
      <UncontrolledForm />
      <ServerRequestComponent />
    </div>
  )
}

export default App
