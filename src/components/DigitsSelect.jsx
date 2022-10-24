import {categories} from "../utils/numbers.js";

const UnitButton = ({digits, selected, onClick}) => {
  return <button onClick={() => onClick(digits)}
    className={`button digits-button ${selected && "selected"}`}>
      {digits}
    </button>
}

const DigitsSelect = ({digits, setDigits}) => {
  return <div className='option-group'>
    Digits:

    {Object.keys(categories).map((category) => {
      return <UnitButton digits={categories[category]} key={category} selected={digits === categories[category]} onClick={setDigits}/>
    })}
  </div>
}

export default DigitsSelect
