import {useEffect, useMemo} from "react";
import {getFilters} from "../utils/numbers.js";

const PatternButton = ({pattern, selected, onClick}) => {
  return <button onClick={() => onClick(pattern)}
    className={`button pattern-button ${selected && "selected"}`}>
      {pattern}
    </button>
}

const PatternSelect = ({pattern, category, setPattern}) => {

  const filters = useMemo(() => {
    return Object.keys(getFilters(category) || {})
  }, [category]);

  useEffect(() => {
    setPattern(filters?.[0])
  }, [category, filters])

  return <div className='option-group'> 
    Pattern:
    {
      filters.map((filter) => {
        return <PatternButton pattern={filter} key={filter} selected={pattern === filter} onClick={setPattern}/>
      })
    }
  </div>
}

export default PatternSelect
