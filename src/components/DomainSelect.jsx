
const DomainButton = ({domain, selected, onClick}) => {
  return <button onClick={() => onClick(domain)}
    className={`button domain-button ${selected && "selected"}`}>
      {domain}
    </button>
}

const DomainSelect = ({domain, setDomain}) => {
  return <div className='domain-select'>
    Domain: 
    <DomainButton domain={"ETHW"} selected={domain === "ETHW"} onClick={setDomain}/>
    <DomainButton domain={"AWSB"} selected={domain === "AWSB"} onClick={setDomain}/>
    <DomainButton domain={"WENS"} selected={domain === "WENS"} onClick={setDomain}/>
    <DomainButton domain={"POW"} selected={domain === "POW"} onClick={setDomain}/>
    <DomainButton domain={"APE"} selected={domain === "APE"} onClick={setDomain}/>
  </div>
}

export default DomainSelect
