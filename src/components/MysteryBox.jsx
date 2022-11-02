import useCheckOwner from "../hooks/useCheckOwner.js"
import { LoadingOutlined } from '@ant-design/icons';
import usePage from "../hooks/useBoxPage.js"
import { Pagination, Spin } from 'antd';


const antIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />;

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
  return <Spin spinning={nameStatus === "LOADING"} indicator={antIcon}>
    <span className={`name ${color}`} title={color} >
      {name}.ethw
        {nameStatus === 'NOT_AVAILABLE' && <a className="addr" href={`https://www.oklink.com/zh-cn/ethw/address/${addr}`}  target="_blank">当前持有人 {truncateAddress(addr)}</a>}
    </span>
  </Spin>
}

function Box({digits, size, domain}) {
  const { names, total, page, goToPage} = usePage(digits, size)
  return <>
    <div className="names-container">
    <div className="names">
      {names.map(n => <Name key={n} name={n} />)}
    </div>
    </div>
    <Pagination total={total} current={page+1}
                showSizeChanger={false}
                showQuickJumper
                showTotal={total => `Total ${total} names`}
                onChange={(page) => {
                  goToPage(page-1)
                }} pageSize={100}
                className="page-button"
    />
  </>
}

export default Box