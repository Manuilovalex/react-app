import { useNavigate } from 'react-router-dom'

const Navigate = ({ destination }) => {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate(`/${destination}`)
  }

  return (
    <div className="Navigate">
      <button onClick={handleButtonClick}>{destination}</button>
    </div>
  )
}

export default Navigate
