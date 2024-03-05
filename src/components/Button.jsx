import { useState } from 'react'

const Button = ({ initialText }) => {
  const [buttonText, setButtonText] = useState(initialText)

  const handleButtonClick = () => {
    setButtonText((prevText) => {
      return prevText === 'Сlick me please...' ? 'Click me to go back please...' : 'Сlick me please...'
    })
  }

  return (
    <div>
      <button onClick={handleButtonClick}>{buttonText}</button>
    </div>
  )
}

export default Button
