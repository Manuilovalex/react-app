const UncontrolledForm = () => {
  const handlerFormSubmit = (e) => {
    e.preventDefault()
    const target = e.target
    console.log('UserName:', target.username.value)
    console.log('Password:', target.password.value)
  }
  return (
    <div>
      <h2>Uncontrolled Form</h2>
      <form onSubmit={handlerFormSubmit}>
        <div>
          <label>
            UserName:
          </label>
          <input id="username" name="username" type="text" placeholder="Enter name..." />
        </div>
        <div>
          <label>
            Password:
          </label>
          <input id="password" name="password" type="text" placeholder="Enter password..." />
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
    </div> 
  )
}

export default UncontrolledForm
