import { useCallback, useEffect, useState } from "react"
import * as _ from "lodash"

const generateNames = (digits, start, size) => {
  const names = []
  let next = false
  if(digits === 4) {
    for(let i = start; i < Math.min(start + size, 10000); i++) {
      names.push(_.padStart(i.toString(), digits, "0"))
    }
    if(start + size < 9999) {
      next = true
    }
  } else if (digits === 5) {
    for(let i = start; i < Math.min(start + size, 100000); i++) {
      names.push(_.padStart(i.toString(), digits, "0"))
    }
    if(start + size < 99999) {
      next = true
    }
  }
  return {names, next}
}

const usePage = (digits, size) => {
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
    const {names, next} = generateNames(digits, page * size, size)
    setNames(names)
    setNext(next)
  }, [page, digits])

  return {next, names, goNextPage, goPreviousPage}
}

export default usePage