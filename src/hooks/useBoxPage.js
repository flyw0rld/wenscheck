import { useCallback, useEffect, useState } from "react"
import { getAllNumbers } from "../utils/mysterybox.js"

const generateNames = (category, page, size, type = 'NONE') => {
  const names = []
  let next = false
  const all = getAllNumbers(category, type)
  const start = page * size;
  const end = Math.min(all.length, page * size + size)
  names.push(...all.slice(start, end))
  if(end < all.length) {
    next = true
  }
  return {names, next, total: all.length}
}

const usePage = (digits, size) => {
  const [next, setNext] = useState(false)
  const [names, setNames] = useState([])
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)
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
  }, [digits])

  useEffect(() => {
    const {names, next, total} = generateNames(digits, page, size)
    setNames(names)
    setNext(next)
    setTotal(total)
  }, [page, digits])

  return {next, names, page, goNextPage, goPreviousPage, total}
}

export default usePage