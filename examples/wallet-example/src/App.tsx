import React, { useState, useMemo } from 'react';
import logo from './logo.svg';
import './App.css';

import SatoriWallet from "@satorisports/satori-wallet"
import { TokenType } from '@satorisports/satori-wallet/build/types';
const wallet = new SatoriWallet(process.env.REACT_APP_INFURA_ID!, true)
function App() {
  const [tokenAddress, setTokenAddress] = useState<string>("")
  const [tokenId, setTokenId] = useState<number>(1)
  const [tokenType, setTokenType] = useState<TokenType>(TokenType.FAN_TOKEN)
  const [connected, setConnected] = useState(wallet.getConnected())
  const [balance, setBalance] = useState(0)
  const address = useMemo(() => connected && wallet.getUserAddress(), [connected])
  const selection = useMemo(() => {
    return <select
      value={tokenType}
      onChange={e => setTokenType(+e.target.value)}>
        {Object.keys(TokenType).filter(e => isNaN(Number(e))).map((type, i) => <option key={i} value={i}>{type}</option>)}
      </select>
  }, [tokenType])
  
  return (
    <div className="App">
      <header className="">
        {connected && <div>
          <h2>Connected</h2>
          <div style={{ "paddingBottom": "10px" }}><b>Wallet Address: </b><br /><span style={{ "fontSize": "12px" }}>{address}</span></div>
          <div style={{ "paddingBottom": "10px" }}><b>Token Address: </b><br /><input type="text" onChange={e => setTokenAddress(e.target.value)} value={tokenAddress} /></div>
          <div style={{ "paddingBottom": "10px" }}><b>Token Type: </b><br />{selection}</div>
          <div style={{ "paddingBottom": "10px" }}><b>Token Id: </b><br /><input type="number" onChange={e => +e.target.value > 0 && setTokenId(+e.target.value)} value={tokenId} /></div>
          <div style={{ "paddingBottom": "10px" }}><b>Token Balance: </b>{balance}</div>

          <button onClick={async e => {
            console.log("Clicked", tokenAddress, tokenType, tokenId)
            if (!tokenAddress || tokenAddress.length === 0) {
              return // token address is not defined
            }
            const balance = await wallet!.getBalance({
              address: tokenAddress,
              type: tokenType
            }, tokenId)
            console.log("Balance is", balance)
            setBalance(balance)
          }}>Get Balance</button>
          <br />
          <button onClick={async e => {
            await wallet!.disconnectWallet()
            setConnected(wallet!.getConnected())
          }}>Disconnect</button>
        </div>
        }
        {!connected && <div>
          <h2>Not connected</h2>
          <button onClick={async e => {
            await wallet!.connectWallet("Please sign this - " + Date.now)
            console.log("Address is", wallet!.getUserAddress(), wallet!.getConnected())
            setConnected(wallet!.getConnected())
          }}>Connect</button>
        </div>
        }
      </header>
    </div>
  );
}

export default App;
