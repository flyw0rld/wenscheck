import { useCallback, useEffect, useState } from "react"
import * as _ from "lodash"

const generateNames = (unit, start, size) => {
  const names = []
  let next = false
  if(unit === 4) {
    for(let i = start; i < Math.min(start + size, 10000); i++) {
      names.push(_.padStart(i.toString(), unit, "0"))
    }
    if(start + size < 9999) {
      next = true
    }
  }
  return {names, next}
}

const usePage = (unit, size) => {
  const [next, setNext] = useState(false)
  const [names, setNames] = useState([])
  const [page, setPage] = useState(0)
  const goNextPage = useCallback(() => {
    setNext(false)
    setPage(page + 1)
  })

  const goPreviousPage = useCallback(() => {
    setNext(false)
    setPage(Math.max(page - 1, 0))
  })

  useEffect(() => {
    const {names, next} = generateNames(unit, page * size, size)
    setNames(names)
    setNext(next)
  }, [page])

  return {next, names, goNextPage, goPreviousPage}
}

export default usePage