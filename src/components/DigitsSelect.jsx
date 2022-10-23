
const UnitButton = ({digits, selected, onClick}) => {
  return <button onClick={() => onClick(digits)}
    className={`button digits-button ${selected && "selected"}`}>
      {digits}
    </button>
}

const DigitsSelect = ({digits, setDigits}) => {
  return <div className='option-group'>
    Digits: 
    <UnitButton digits={4} selected={digits === 4} onClick={setDigits}/>
    <UnitButton digits={5} selected={digits === 5} onClick={setDigits}/>
  </div>
}

export default DigitsSelect
