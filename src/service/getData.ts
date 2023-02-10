import axios from "axios"

export const getData = async (path: string) => {
  try {
    const fetchedData = await axios.get(`https://mockend.com/juunegreiros/BE-test-api/${path}`)
    return fetchedData.data
  } catch (error) {
    console.error(error)
  }
}
