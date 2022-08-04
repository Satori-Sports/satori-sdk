"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestERC20__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b506040805180820182526003808252622137b160e91b60208084019182528451808601909552828552622127a160e91b908501528251929392620000579291906200017a565b5080516200006d9060049060208401906200017a565b5050506200008c3369021e19e0c9bab24000006200009260201b60201c565b62000284565b6001600160a01b038216620000ed5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b806002600082825462000101919062000220565b90915550506001600160a01b038216600090815260208190526040812080548392906200013090849062000220565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001889062000247565b90600052602060002090601f016020900481019282620001ac5760008555620001f7565b82601f10620001c757805160ff1916838001178555620001f7565b82800160010185558215620001f7579182015b82811115620001f7578251825591602001919060010190620001da565b506200020592915062000209565b5090565b5b808211156200020557600081556001016200020a565b600082198211156200024257634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200025c57607f821691505b602082108114156200027e57634e487b7160e01b600052602260045260246000fd5b50919050565b61099c80620002946000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80636a627842116100715780636a6278421461014157806370a082311461015657806395d89b411461017f578063a457c2d714610187578063a9059cbb1461019a578063dd62ed3e146101ad57600080fd5b806306fdde03146100b9578063095ea7b3146100d757806318160ddd146100fa57806323b872dd1461010c578063313ce5671461011f578063395093511461012e575b600080fd5b6100c16101c0565b6040516100ce91906107d9565b60405180910390f35b6100ea6100e536600461084a565b610252565b60405190151581526020016100ce565b6002545b6040519081526020016100ce565b6100ea61011a366004610874565b61026a565b604051600681526020016100ce565b6100ea61013c36600461084a565b61028e565b61015461014f3660046108b0565b6102b0565b005b6100fe6101643660046108b0565b6001600160a01b031660009081526020819052604090205490565b6100c16102c6565b6100ea61019536600461084a565b6102d5565b6100ea6101a836600461084a565b610355565b6100fe6101bb3660046108d2565b610363565b6060600380546101cf90610905565b80601f01602080910402602001604051908101604052809291908181526020018280546101fb90610905565b80156102485780601f1061021d57610100808354040283529160200191610248565b820191906000526020600020905b81548152906001019060200180831161022b57829003601f168201915b5050505050905090565b60003361026081858561038e565b5060019392505050565b6000336102788582856104b2565b61028385858561052c565b506001949350505050565b6000336102608185856102a18383610363565b6102ab9190610940565b61038e565b6102c38168056bc75e2d631000006106fa565b50565b6060600480546101cf90610905565b600033816102e38286610363565b9050838110156103485760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b610283828686840361038e565b60003361026081858561052c565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166103f05760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161033f565b6001600160a01b0382166104515760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161033f565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006104be8484610363565b9050600019811461052657818110156105195760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161033f565b610526848484840361038e565b50505050565b6001600160a01b0383166105905760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161033f565b6001600160a01b0382166105f25760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161033f565b6001600160a01b0383166000908152602081905260409020548181101561066a5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161033f565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906106a1908490610940565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516106ed91815260200190565b60405180910390a3610526565b6001600160a01b0382166107505760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161033f565b80600260008282546107629190610940565b90915550506001600160a01b0382166000908152602081905260408120805483929061078f908490610940565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600060208083528351808285015260005b81811015610806578581018301518582016040015282016107ea565b81811115610818576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461084557600080fd5b919050565b6000806040838503121561085d57600080fd5b6108668361082e565b946020939093013593505050565b60008060006060848603121561088957600080fd5b6108928461082e565b92506108a06020850161082e565b9150604084013590509250925092565b6000602082840312156108c257600080fd5b6108cb8261082e565b9392505050565b600080604083850312156108e557600080fd5b6108ee8361082e565b91506108fc6020840161082e565b90509250929050565b600181811c9082168061091957607f821691505b6020821081141561093a57634e487b7160e01b600052602260045260246000fd5b50919050565b6000821982111561096157634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220829740bcc18adc75854859e536e1eb9ea438d38e5cc368ba9f0d417d3dd26beb64736f6c63430008090033";
const isSuperArgs = (xs) => xs.length > 1;
class TestERC20__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.TestERC20__factory = TestERC20__factory;
TestERC20__factory.bytecode = _bytecode;
TestERC20__factory.abi = _abi;