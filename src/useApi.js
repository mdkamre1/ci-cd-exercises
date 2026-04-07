import { useState, useEffect } from 'react'

export const useApi = (url, transform) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url)
        const json = await res.json()

        const result = transform ? transform(json.results) : json

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