import { useState } from 'react'
import Names from "./components/Names"
import MysteryBox from "./components/MysteryBox.jsx"
import Header from "./components/Header"
import DomainSelect from "./components/DomainSelect"
import DigitsSelect from "./components/DigitsSelect"
import PatternSelect from "./components/PatternSelect"
import AppSelect from "./components/AppSelect.jsx"
import './App.css'
import { categories } from "./utils/numbers.js";
import { categories as boxCategories} from "./utils/mysterybox.js";

function App() {
  const [app, setApp] = useState("Search")
  const [domain, setDomain] = useState("ETHW")
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
    </div>
  )
}

export default App
