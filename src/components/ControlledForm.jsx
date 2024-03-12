import { useState } from 'react'

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    textValue: '',
    selectValue: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Controlled Form Data:', formData)
  }

  return (
    <div>
      <h2>Controlled Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Text Field:</label>
          <input type="text" name="textValue" placeholder="Text..." value={formData.textValue} onChange={handleChange} />
          <label>Select:</label>
          <select name="selectValue" value={formData.selectValue} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ControlledForm
