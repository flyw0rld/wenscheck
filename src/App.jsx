import { useState } from 'react'
import Names from "./components/Names"
import Header from "./components/Header"
import DomainSelect from "./components/DomainSelect"
import './App.css'

function App() {
  const [domain, setDomain] = useState("ETHW")
  
  return (
    <div className="App">
      <Header />
      <DomainSelect domain={domain} setDomain={setDomain}/>
      <Names unit={4} size={100} domain={domain} />
    </div>
  )
}

export default App
