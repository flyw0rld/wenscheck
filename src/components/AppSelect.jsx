
const DomainButton = ({app, selected, onClick}) => {
  return <button onClick={() => onClick(app)}
    className={`button app-button ${selected && "selected"}`}>
      {app}
    </button>
}

const DomainSelect = ({app, setApp}) => {
  return <div>
    <DomainButton app={"Search"} selected={app === "Search"} onClick={setApp}/>
    <DomainButton app={"MysteryBox"} selected={app === "MysteryBox"} onClick={setApp}/>
  </div>
}

export default DomainSelect
