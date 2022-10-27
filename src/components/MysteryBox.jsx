import useCheckOwner from "../hooks/useCheckOwner.js"
import usePage from "../hooks/useBoxPage.js"

function Name({name}) {
  const nameStatus = useCheckOwner(name)
  const color = nameStatus === "AVAILABLE" ? "available" : nameStatus === "LOADING" ? "loading" : "not-available"
  return <a className={`name ${color}`} title={color} href={`https://wens.domains/?search=${name}`} target="_blank">{name}.ethw</a>
}

function Box({digits, size, domain}) {
  const {next, names, total, page, goNextPage, goPreviousPage} = usePage(digits, size)
  return <><div className="names">
      {names.map(n => <Name key={n} name={n} />)}
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

export default Box