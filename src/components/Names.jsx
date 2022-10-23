import useAvailableName from "../hooks/useAvailableName"
import usePage from "../hooks/usePage"

function Name({name, domain}) {
  const nameStatus = useAvailableName(name, domain)
  const color = nameStatus === "AVAILABLE" ? "available" : nameStatus === "LOADING" ? "loading" : "not-available"
  return <a className={`name ${color}`} href="https://wens.domains/" target="_blank">{name}.{domain.toLowerCase()}</a>
}

function Names({digits, size, domain}) {
  const {next, names, goNextPage, goPreviousPage} = usePage(digits, size)
  return <><div className="names">
      {names.map(n => <Name key={n} name={n} domain={domain}/>)}
    </div>
    <div className="page-button">
      <button className="button" onClick={goPreviousPage}>{"<"}</button>
      <button className="button" onClick={next && goNextPage}>{">"}</button>
    </div>
  </>
}

export default Names