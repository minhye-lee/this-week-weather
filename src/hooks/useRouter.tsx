import { useNavigate } from 'react-router-dom'
import { useMemo } from 'react'

export function useRouter() {
  const navigate = useNavigate()
  return useMemo(() => {
    return {
      goBack() {
        navigate(-1)
      },
      push(path: RoutePath, params?: { [index: string]: string }) {
        if (params) {
          let query: string[] = []
          Object.keys(params).forEach((key) => {
            query.push(`${key}=${params[key]}`)
          })
          navigate(`${path}?${query.join('&')}`)
        } else {
          navigate(path)
        }
      },
    }
  }, [navigate])
}

type RoutePath = '/home' | '/edit'
