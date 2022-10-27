const UnitButton = ({digits, selected, onClick}) => {
  return <button onClick={() => onClick(digits)}
    className={`button digits-button ${selected && "selected"}`}>
      {digits}
    </button>
}

const DigitsSelect = ({digits, setDigits, categories}) => {
  return <div className='option-group'>
    Digits:
    {Object.keys(categories).map((category) => {
      return <UnitButton digits={categories[category]} key={category} selected={digits === categories[category]} onClick={setDigits}/>
    })}
  </div>
}

export default DigitsSelect
