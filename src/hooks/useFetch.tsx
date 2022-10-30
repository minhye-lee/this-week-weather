import { useEffect, useState } from 'react'

interface Props<D> {
  fetchFn: () => Promise<D>
  deps?: any[]
}

function useFetch<D>({ fetchFn, deps = [] }: Props<D>) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<D | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true)
        const data: D = await fetchFn()
        setData(data)
        setLoading(false)
      } catch (err) {
        setLoading(false)
        setError(new Error('에러가 발생하였습니다.'))
      }
    }
    init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchFn, ...deps])

  return { loading, data, error }
}
export default useFetch
