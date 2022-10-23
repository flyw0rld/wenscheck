
const PatternButton = ({pattern, selected, onClick}) => {
  return <button onClick={() => onClick(pattern)}
    className={`button pattern-button ${selected && "selected"}`}>
      {pattern}
    </button>
}

const PatternSelect = ({pattern, setPattern}) => {
  return <div className='option-group'> 
    Pattern: 
    <PatternButton pattern={"NONE"} selected={pattern === "NONE"} onClick={setPattern}/>
    <PatternButton pattern={"000X"} selected={pattern === "000X"} onClick={setPattern}/>
    <PatternButton pattern={"X000"} selected={pattern === "X000"} onClick={setPattern}/>
    <PatternButton pattern={"00XX"} selected={pattern === "00XX"} onClick={setPattern}/>
    <PatternButton pattern={"XX00"} selected={pattern === "XX00"} onClick={setPattern}/>
    <PatternButton pattern={"AAAB"} selected={pattern === "AAAB"} onClick={setPattern}/>
    <PatternButton pattern={"AABA"} selected={pattern === "AABA"} onClick={setPattern}/>
    <PatternButton pattern={"AABB"} selected={pattern === "AABB"} onClick={setPattern}/>
    <PatternButton pattern={"ABAB"} selected={pattern === "ABAB"} onClick={setPattern}/>
    <PatternButton pattern={"ABBA"} selected={pattern === "ABBA"} onClick={setPattern}/>
    <PatternButton pattern={"ABBB"} selected={pattern === "ABBB"} onClick={setPattern}/>
    <PatternButton pattern={"AAAA"} selected={pattern === "AAAA"} onClick={setPattern}/>
    <PatternButton pattern={"DCBA"} selected={pattern === "DCBA"} onClick={setPattern}/>
  </div>
}

export default PatternSelect
