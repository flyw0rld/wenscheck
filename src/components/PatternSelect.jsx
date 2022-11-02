import {useEffect, useMemo} from "react";
import {getFilters} from "../utils/numbers.js";
import {Radio} from "antd";

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

  return <div className='option-group'>
    Pattern：
    <Radio.Group value={pattern} onChange={e => setPattern(e.target.value)}>
      {filters.map((filter) => {
          return <Radio.Button value={filter}
                               key={filter}>{filter}</Radio.Button>
        })
      }
    </Radio.Group>
  </div>
}

export default PatternSelect
