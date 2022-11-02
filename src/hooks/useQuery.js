import { useSearchParams } from 'react-router-dom'
import { pickBy, isNull, isUndefined } from 'lodash'

export const useQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const all = () => {
    const keys = Array.from(searchParams.keys())
    return keys.reduce((prev, key) => {
      return {
        ...prev,
        [key]: searchParams.getAll(key),
      }
    }, {})
  }

  return {
    searchParams,
    setSearchParams,
    all,
    get(key) {
      return searchParams.get(key)
    },
    replace(query) {
      const params = {
        ...all(),
        ...query,
      }
      setSearchParams(
        pickBy(params, (value) => !isUndefined(value) || !isNull(value)),
        { replace: true },
      )
    },
  }
}
