import { ethers, BigNumber} from "ethers"
import { useEffect, useState } from "react"
import {keccak256 } from "js-sha3"

function getTokenId(name) {
  const namenode = '0x'+keccak256(`${name}`)
  const tokenId = BigNumber.from(namenode).toString()
  return tokenId
}


const address = '0x9feb3ab8a40B620B68A112EA0f82C6cF06B5c6fB'
const provider = new ethers.providers.JsonRpcProvider("https://mainnet.ethereumpow.org/")
const controllerContract = new ethers.Contract(address, [{
  "inputs": [
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  "name": "ownerOf",
  "outputs": [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ],
  "stateMutability": "view",
  "type": "function"
}], provider)

const useCheckOwner = (name) => {
  const [status, setStatus] = useState("LOADING")
  const [addr, setAddr] = useState(null)
  useEffect(() => {
    setStatus("LOADING")
    const tokenId = getTokenId(name)
    controllerContract.ownerOf(tokenId).then(r => {
      setAddr(r)
      if(r === '0x2928A445D4a76cb0811c952ef85d2d39F7c79414') {
        setStatus("AVAILABLE")
      } else {
        setStatus("NOT_AVAILABLE")
      }
    })
  }, [name])

  return [status, addr]
}
export default useCheckOwner

