import { useState, useEffect } from 'react'
import axios from 'axios'

export const useApi = (url, mapResults) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    axios
      .get(url)
      .then((response) => {
        const result = mapResults
          ? mapResults(response.data)
          : response.data

        setData(result)
        setError(null)
      })
      .catch((err) => {
        setError(err)
        setData(null)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [url])

  return { data, error, isLoading }
}