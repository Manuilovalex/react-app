import Button from './components/Button.jsx'
import Description from './components/Description.jsx'
import ButtonClass from './/components/ClassComponent.jsx'

const App = () => {
  return (
    <div>
      <h1>My-first-React-app</h1>
      <Button initialText="Сlick me please..." />
      <Description text="By class" />
      <ButtonClass />
    </div>
  )
}

export default App
