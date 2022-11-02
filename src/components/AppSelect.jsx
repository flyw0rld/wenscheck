import {Radio} from "antd";

const DomainSelect = ({app, setApp}) => {
  return <div>
    <Radio.Group value={app} onChange={e => setApp(e.target.value)}>
      <Radio.Button value="Search">Search</Radio.Button>
      <Radio.Button value="MysteryBox">MysteryBox</Radio.Button>
    </Radio.Group>
  </div>
}

export default DomainSelect
