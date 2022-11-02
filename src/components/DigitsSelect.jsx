import {Radio} from "antd";
import {useMemo, useEffect} from "react";

const UnitButton = ({digits, selected, onClick}) => {
  return <button onClick={() => onClick(digits)}
    className={`button digits-button ${selected && "selected"}`}>
      {digits}
    </button>
}

const DigitsSelect = ({domain, digits, setDigits, categories}) => {

  const digitCategories = useMemo(() => {
    return Object.keys(categories).map(key => categories[key])
  }, [categories]);

  useEffect(() => {
    if(!digitCategories.includes(digits)) {
      setDigits(digitCategories?.[0])
    }
  }, [digitCategories])

  return <div className='option-group'>
    Digits：
    <Radio.Group value={digits} onChange={e => setDigits(e.target.value)}>
      {digitCategories.map((category) => {
        return <Radio.Button value={category} key={category}>{category}</Radio.Button>
      })}
    </Radio.Group>
  </div>
}

export default DigitsSelect
