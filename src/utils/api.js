const API_URL = 'https://jsonplaceholder.typicode.com/users'

const fetchData = async (setData, setLoading, setError) => {
  try {
    const response = await fetch(API_URL)

    if (!response.ok) {
      throw new Error(`Response was not ok. Status: ${response.status}`)
    }

    const contentType = response.headers.get('content-type')
    if (contentType && contentType.includes('application/json')) {
      const result = await response.json()
      setData(result)
    } else {
      throw new Error('Invalid content type in the response')
    }
  } catch (error) {
    setError(error)
  } finally {
    setLoading(false)
  }
}

export default fetchData
