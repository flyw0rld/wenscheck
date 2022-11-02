import { useCallback, useEffect, useState } from "react"
import { getAllNumbers} from "../utils/numbers"
import {useQuery} from "./useQuery.js";

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

const usePage = (digits, size, type) => {

  const {replace, get} = useQuery()

  const page = parseInt(get('page') || 0)

  const [next, setNext] = useState(false)
  const [names, setNames] = useState([])
  const [total, setTotal] = useState(0)

  const setPage = (number) => {
    replace({
      page: number
    })
  }

  const goNextPage = useCallback(() => {
    setNext(false)
    setPage(page + 1)
  })

  const goPreviousPage = useCallback(() => {
    setNext(false)
    setPage(Math.max(page - 1, 0))
  })

  const goToPage = useCallback((pageNumber) => {
    setPage(pageNumber)
  })

  useEffect(() => {
    const {names, next, total} = generateNames(digits, page, size, type)
    setNames(names)
    setNext(next)
    setTotal(total)
  }, [page, digits, type])

  return {next, names, page, goNextPage, goPreviousPage, goToPage, total}
}

export default usePage