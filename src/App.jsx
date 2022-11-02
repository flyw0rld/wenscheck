import { useState } from 'react'
import Names from "./components/Names"
import MysteryBox from "./components/MysteryBox.jsx"
import Header from "./components/Header"
import DomainSelect from "./components/DomainSelect"
import DigitsSelect from "./components/DigitsSelect"
import PatternSelect from "./components/PatternSelect"
import AppSelect from "./components/AppSelect.jsx"
import "antd/dist/antd.css"
import './App.css'
import { categories } from "./utils/numbers.js";
import { categories as boxCategories} from "./utils/mysterybox.js";
import {Badge, message} from "antd";
import copy from 'copy-to-clipboard';

function App() {
  const [app, setApp] = useState("Search")
  const [domain, setDomain] = useState("TWIT")
  const [digits, setDigits] = useState(categories.fourD)
  const [boxDigits, setBoxDigits] = useState(boxCategories.oneD)
  const [pattern, setPattern] = useState("NONE")

  return (
    <div className="App">
      <Header>
        <AppSelect app={app} setApp={setApp}/>
      </Header>
      {
        app ==='Search' && <>
            <DomainSelect domain={domain} setDomain={setDomain}/>
            <DigitsSelect digits={digits} setDigits={setDigits} categories={categories}/>
            <PatternSelect pattern={pattern} category={digits} setPattern={setPattern}/>
            <Names digits={digits} size={100} domain={domain} type={pattern} />
        </>
      }
      {
        app ==='MysteryBox' && <>
            <DigitsSelect digits={boxDigits} setDigits={setBoxDigits} categories={boxCategories}/>
            <MysteryBox digits={boxDigits} size={100} />
        </>
     }
     <div className="donation-placeholder">
       <div className="donation">
           Donation <Badge dot>
           <a onClick={() => {
               copy('0xD784c2B6FB72e755D40c576cD63CB073D91bCcfA')
               message.success('copy success')
           }}>0xD784c2B6FB72e755D40c576cD63CB073D91bCcfA</a>
       </Badge>
       </div>
     </div>
    </div>
  )
}

export default App
