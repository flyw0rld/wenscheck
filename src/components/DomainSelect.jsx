import { Radio } from 'antd'
const DomainButton = ({domain, selected, onClick}) => {
  return <button onClick={() => onClick(domain)}
    className={`button domain-button ${selected && "selected"}`}>
      {domain}
    </button>
}

const DomainSelect = ({domain, setDomain}) => {
  return <div className='option-group'>
    Domain：
    <Radio.Group value={domain} onChange={e => setDomain(e.target.value)}>
      <Radio.Button value="TWIT">TWIT</Radio.Button>
      <Radio.Button value="ETHW">ETHW</Radio.Button>
      <Radio.Button value="AWSB">AWSB</Radio.Button>
      <Radio.Button value="WENS">WENS</Radio.Button>
      <Radio.Button value="POW">POW</Radio.Button>
      <Radio.Button value="APE">APE</Radio.Button>
    </Radio.Group>
  </div>
}

export default DomainSelect
