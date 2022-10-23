import { ethers } from "ethers"
import { useEffect, useState } from "react"


const registrars = {
  ETHW: '0x9feb3ab8a40B620B68A112EA0f82C6cF06B5c6fB',
  AWSB: '0x9e32b72f8c8C97D1C2FAB030Ad83b65a74516A80',
  WENS: '0xe857F2661DF1398d416528DAb80557d10F3664Db',
  POW: '0x00f3fab319453407Dd1B05740f3De7C73235ab67',
  APE: '0xf5B60bdC04b558A78f9B8DBE45F107BE2FC71c1b'
}

const provider = new ethers.providers.JsonRpcProvider("https://mainnet.ethereumpow.org/")
const controllerContract = new ethers.Contract("0x8f981639CF5c8962C2C7298469Ea3215b74F3CFd", [{
  "inputs": [
    {
      "internalType": "string",
      "name": "name",
      "type": "string"
    },
    {
      "internalType": "contract BaseRegistrarImplementation[]",
      "name": "registrars",
      "type": "address[]"
    }
  ],
  "name": "available",
  "outputs": [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ],
  "stateMutability": "view",
  "type": "function"
}], provider)

const useAvailableName = (name, domain) => {

  const [status, setStatus] = useState("LOADING")
  useEffect(() => {
    setStatus("LOADING")
    controllerContract.available(name, [registrars[domain]]).then(r => {
      if(r) {
        setStatus("AVAILABLE")
      } else {
        setStatus("NOT_AVAILABLE")
      }
    })
  }, [name, domain])

  return status
}
export default useAvailableName

