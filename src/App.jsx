import { useState } from 'react'
import Names from "./components/Names"
import Header from "./components/Header"
import DomainButton from "./components/DomainButton"
import './App.css'

function App() {
  const [domain, setDomain] = useState("ETHW")
  
  return (
    <div className="App">
      <Header />
      <div className='domain-select'>
        Domain: 
        <DomainButton domain={"ETHW"} selected={domain === "ETHW"} onClick={setDomain}/>
        <DomainButton domain={"AWSB"} selected={domain === "AWSB"} onClick={setDomain}/>
        <DomainButton domain={"WENS"} selected={domain === "WENS"} onClick={setDomain}/>
        <DomainButton domain={"POW"} selected={domain === "POW"} onClick={setDomain}/>
        <DomainButton domain={"APE"} selected={domain === "APE"} onClick={setDomain}/>
      </div>
      
      <Names unit={4} size={100} domain={domain} />
    </div>
  )
}

export default App
