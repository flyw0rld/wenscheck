import {Radio} from "antd";

const UnitButton = ({digits, selected, onClick}) => {
  return <button onClick={() => onClick(digits)}
    className={`button digits-button ${selected && "selected"}`}>
      {digits}
    </button>
}

const DigitsSelect = ({digits, setDigits, categories}) => {
  return <div className='option-group'>
    Digits：
    <Radio.Group value={digits} onChange={e => setDigits(e.target.value)}>
      {Object.keys(categories).map((category) => {
        return <Radio.Button value={categories[category]} key={categories[category]}>{categories[category]}</Radio.Button>
      })}
    </Radio.Group>
  </div>
}

export default DigitsSelect
