import { useState, useEffect } from 'react'
import axios from 'axios'

export const useApi = (url, mapResults) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url)

        const mapped = mapResults
          ? mapResults(response.data)
          : response.data

        setData(mapped)
        setIsLoading(false)
      } catch (err) {
        setError(err)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, error, isLoading }
}