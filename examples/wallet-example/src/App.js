"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./App.css");
const satori_wallet_1 = __importDefault(require("@satorisports/satori-wallet"));
const types_1 = require("@satorisports/satori-wallet/build/types");
const wallet = new satori_wallet_1.default(process.env.REACT_APP_INFURA_ID, true);
function App() {
    const [tokenAddress, setTokenAddress] = (0, react_1.useState)("");
    const [tokenId, setTokenId] = (0, react_1.useState)(1);
    const [tokenType, setTokenType] = (0, react_1.useState)(types_1.TokenType.FAN_TOKEN);
    const [connected, setConnected] = (0, react_1.useState)(wallet.getConnected());
    const [balance, setBalance] = (0, react_1.useState)(0);
    const address = (0, react_1.useMemo)(() => connected && wallet.getUserAddress(), [connected]);
    const selection = (0, react_1.useMemo)(() => {
        return <select value={tokenType} onChange={e => setTokenType(+e.target.value)}>
        {Object.keys(types_1.TokenType).filter(e => isNaN(Number(e))).map((type, i) => <option key={i} value={i}>{type}</option>)}
      </select>;
    }, [tokenType]);
    return (<div className="App">
      <header className="">
        {connected && <div>
          <h2>Connected</h2>
          <div style={{ "paddingBottom": "10px" }}><b>Wallet Address: </b><br /><span style={{ "fontSize": "12px" }}>{address}</span></div>
          <div style={{ "paddingBottom": "10px" }}><b>Token Address: </b><br /><input type="text" onChange={e => setTokenAddress(e.target.value)} value={tokenAddress}/></div>
          <div style={{ "paddingBottom": "10px" }}><b>Token Type: </b><br />{selection}</div>
          <div style={{ "paddingBottom": "10px" }}><b>Token Id: </b><br /><input type="number" onChange={e => +e.target.value > 0 && setTokenId(+e.target.value)} value={tokenId}/></div>
          <div style={{ "paddingBottom": "10px" }}><b>Token Balance: </b>{balance}</div>

          <button onClick={(e) => __awaiter(this, void 0, void 0, function* () {
                console.log("Clicked", tokenAddress, tokenType, tokenId);
                if (!tokenAddress || tokenAddress.length === 0) {
                    return; // token address is not defined
                }
                const balance = yield wallet.getBalance({
                    address: tokenAddress,
                    type: tokenType
                }, tokenId);
                console.log("Balance is", balance);
                setBalance(balance);
            })}>Get Balance</button>
          <br />
          <button onClick={(e) => __awaiter(this, void 0, void 0, function* () {
                yield wallet.disconnectWallet();
                setConnected(wallet.getConnected());
            })}>Disconnect</button>
        </div>}
        {!connected && <div>
          <h2>Not connected</h2>
          <button onClick={(e) => __awaiter(this, void 0, void 0, function* () {
                yield wallet.connectWallet("Please sign this - " + Date.now);
                console.log("Address is", wallet.getUserAddress(), wallet.getConnected());
                setConnected(wallet.getConnected());
            })}>Connect</button>
        </div>}
      </header>
    </div>);
}
exports.default = App;
