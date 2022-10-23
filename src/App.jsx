import { useState } from 'react'
import Names from "./components/Names"
import Header from "./components/Header"
import DomainSelect from "./components/DomainSelect"
import DigitsSelect from "./components/DigitsSelect"
import './App.css'

function App() {
  const [domain, setDomain] = useState("ETHW")
  const [digits, setDigits] = useState(4)
  
  return (
    <div className="App">
      <Header />
      <DomainSelect domain={domain} setDomain={setDomain}/>
      <DigitsSelect digits={digits} setDigits={setDigits}/>
      <Names digits={digits} size={100} domain={domain} />
    </div>
  )
}

export default App
