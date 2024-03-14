import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

const axiosData = async () => {
  try {
    const response = await axios.get(API_URL)

    return response.data
  } catch (err) {
    throw new Error('Error fetching data')
  }
}

export default axiosData
