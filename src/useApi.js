import { useState, useEffect } from 'react'
import axios from 'axios'

export const useApi = (url, transform) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url)

        const result = transform
          ? transform(res.data.results)
          : res.data

        setData(result)
        setIsLoading(false)
      } catch (err) {
        setError(err)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url, transform])

  return { data, error, isLoading }
}