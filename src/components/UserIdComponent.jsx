const renderUserData = (userData) => {

  return (
    <ul>
      {Object.entries(userData).map(([key, value]) => (
        <li key={key}>
          {typeof value === 'object' ? (
            <>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
              {renderUserData(value)}
            </>
          ) : (
            <span>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}

export default renderUserData