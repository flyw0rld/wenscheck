import useAvailableName from "../hooks/useAvailableName"
import usePage from "../hooks/usePage"

function Name({name, domain}) {
  const nameStatus = useAvailableName(name, domain)
  const color = nameStatus === "AVAILABLE" ? "available" : nameStatus === "LOADING" ? "loading" : "not-available"
  return <a className={`name ${color}`} href={`https://app.wens.domains/?name=${name}`} target="_blank">{name}.{domain.toLowerCase()}</a>
}

function Names({digits, size, domain, type}) {
  const {next, names, total, page, goNextPage, goPreviousPage} = usePage(digits, size, type)
  return <><div className="names">
      {names.map(n => <Name key={n} name={n} domain={domain}/>)}
    </div>
    <div className="page-button">
      <div>
        <button className="button" disabled={page===0} onClick={goPreviousPage}>{"<"}</button>
        <button className="button" disabled={!next} onClick={next ?  goNextPage : undefined}>{">"}</button>
      </div>

      <div>
        Page {page+1},
        Total {total}
      </div>
    </div>
  </>
}

export default Names