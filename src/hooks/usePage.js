import { useCallback, useEffect, useState } from "react"
import { get4k, get5k } from "../utils/numbers"
import * as _ from "lodash"

const generateNames = (digits, page, size, type = 'NONE') => {
  const names = []
  let all = []
  let next = false
  if(digits === 4) {
    all = get4k(type)
  } else if (digits === 5) {
    all = get5k(type)
  }
  const start = page * size;
  const end = Math.min(all.length, page * size + size)
  names.push(...all.slice(start, end))
  if(end < all.length) {
    next = true
  }
  return {names, next}
}

const usePage = (digits, size, type) => {
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
    setPage(0)
  }, [digits, type])

  useEffect(() => {
    const {names, next} = generateNames(digits, page, size, type)
    setNames(names)
    setNext(next)
  }, [page, digits, type])

  return {next, names, goNextPage, goPreviousPage}
}

export default usePage