import useCheckOwner from "../hooks/useCheckOwner.js"
import usePage from "../hooks/useBoxPage.js"

export const truncateAddress = (address) => {
  if (!address) return "No Account";
  const match = address.match(
      /^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{2})$/
  );
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

function Name({name}) {
  const [nameStatus, addr] = useCheckOwner(name)
  const color = nameStatus === "AVAILABLE" ? "available" : nameStatus === "LOADING" ? "loading" : "not-available"
  return <span className={`name ${color}`} title={color} >
    {name}.ethw
    {nameStatus === 'NOT_AVAILABLE' && <a className="addr" href={`https://www.oklink.com/zh-cn/ethw/address/${addr}`}  target="_blank">当前持有人 {truncateAddress(addr)}</a>}
  </span>
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