import { useState, useEffect } from 'react'
import axios from 'axios'

export const useApi = (url, transform) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const result = transform
          ? transform(response.data.results)
          : response.data

        setData(result)
        setIsLoading(false)
      })
      .catch((error) => {
        setError(error)
        setIsLoading(false)
      })
  }, [url, transform])

  return { data, error, isLoading }
}