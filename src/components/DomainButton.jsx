
const DomainButton = ({domain, selected, onClick}) => {
  return <button onClick={() => onClick(domain)}
    className={`button domain-button ${selected && "selected"}`}>
      {domain}
    </button>
}

export default DomainButton
