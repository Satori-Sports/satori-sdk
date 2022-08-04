/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  TokenFactory721,
  TokenFactory721Interface,
} from "../../tokens/TokenFactory721";

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
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "TokenCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "tokenCost",
        type: "uint256",
      },
      {
        internalType: "contract IRoyalties",
        name: "_royalties",
        type: "address",
      },
      {
        internalType: "contract IRoyaltiesConfig",
        name: "_royaltiesConfig",
        type: "address",
      },
    ],
    name: "createToken",
    outputs: [
      {
        internalType: "contract IToken721",
        name: "collectible",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token721Implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161001d9061005f565b604051809103906000f080158015610039573d6000803e3d6000fd5b50600080546001600160a01b0319166001600160a01b039290921691909117905561006c565b61327e80610c4883390190565b610bcd8061007b6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632db1ac801461003b578063db5645421461006a575b600080fd5b60005461004e906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b61004e610078366004610282565b6000805460405182916001600160a01b031690631bbdd89b60e21b906100ac908a908a908a908a908a903390602401610364565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516100e9906101ba565b6100f49291906103ba565b604051809103906000f080158015610110573d6000803e3d6000fd5b50604051634554aea160e01b81526001600160a01b03808316600483015291935083925090851690634554aea190602401600060405180830381600087803b15801561015b57600080fd5b505af115801561016f573d6000803e3d6000fd5b50506040516001600160a01b03841681527f2e2b3f61b70d2d131b2a807371103cc98d51adcaa5e9a8f9c32658ad8426e74e9250602001905060405180910390a15095945050505050565b6107b1806103e783390190565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126101ee57600080fd5b813567ffffffffffffffff80821115610209576102096101c7565b604051601f8301601f19908116603f01168101908282118183101715610231576102316101c7565b8160405283815286602085880101111561024a57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6001600160a01b038116811461027f57600080fd5b50565b600080600080600060a0868803121561029a57600080fd5b853567ffffffffffffffff808211156102b257600080fd5b6102be89838a016101dd565b965060208801359150808211156102d457600080fd5b506102e1888289016101dd565b9450506040860135925060608601356102f98161026a565b915060808601356103098161026a565b809150509295509295909350565b6000815180845260005b8181101561033d57602081850181015186830182015201610321565b8181111561034f576000602083870101525b50601f01601f19169290920160200192915050565b60c08152600061037760c0830189610317565b82810360208401526103898189610317565b604084019790975250506001600160a01b039384166060820152918316608083015290911660a09091015292915050565b6001600160a01b03831681526040602082018190526000906103de90830184610317565b94935050505056fe60806040526040516107b13803806107b183398101604081905261002291610349565b61004d60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd610417565b60008051602061076a833981519152146100695761006961043c565b6100758282600061007c565b50506104a1565b610085836100b2565b6000825111806100925750805b156100ad576100ab83836100f260201b6100291760201c565b505b505050565b6100bb8161011e565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060610117838360405180606001604052806027815260200161078a602791396101de565b9392505050565b610131816102bc60201b6100551760201c565b6101985760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101bd60008051602061076a83398151915260001b6102cb60201b6100641760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b60606001600160a01b0384163b6102465760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b606482015260840161018f565b600080856001600160a01b0316856040516102619190610452565b600060405180830381855af49150503d806000811461029c576040519150601f19603f3d011682016040523d82523d6000602084013e6102a1565b606091505b5090925090506102b28282866102ce565b9695505050505050565b6001600160a01b03163b151590565b90565b606083156102dd575081610117565b8251156102ed5782518084602001fd5b8160405162461bcd60e51b815260040161018f919061046e565b634e487b7160e01b600052604160045260246000fd5b60005b83811015610338578181015183820152602001610320565b838111156100ab5750506000910152565b6000806040838503121561035c57600080fd5b82516001600160a01b038116811461037357600080fd5b60208401519092506001600160401b038082111561039057600080fd5b818501915085601f8301126103a457600080fd5b8151818111156103b6576103b6610307565b604051601f8201601f19908116603f011681019083821181831017156103de576103de610307565b816040528281528860208487010111156103f757600080fd5b61040883602083016020880161031d565b80955050505050509250929050565b60008282101561043757634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fd5b6000825161046481846020870161031d565b9190910192915050565b602081526000825180602084015261048d81604085016020870161031d565b601f01601f19169190910160400192915050565b6102ba806104b06000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610067565b61009f565b565b606061004e838360405180606001604052806027815260200161025e602791396100c3565b9392505050565b6001600160a01b03163b151590565b90565b600061009a7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b3660008037600080366000845af43d6000803e8080156100be573d6000f35b3d6000fd5b60606001600160a01b0384163b6101305760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b03168560405161014b919061020e565b600060405180830381855af49150503d8060008114610186576040519150601f19603f3d011682016040523d82523d6000602084013e61018b565b606091505b509150915061019b8282866101a5565b9695505050505050565b606083156101b457508161004e565b8251156101c45782518084602001fd5b8160405162461bcd60e51b8152600401610127919061022a565b60005b838110156101f95781810151838201526020016101e1565b83811115610208576000848401525b50505050565b600082516102208184602087016101de565b9190910192915050565b60208152600082518060208401526102498160408501602087016101de565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212206a99b83505c08050563fe1c0be965df19794e0665589aa5074b00dd832c415d464736f6c63430008090033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220df7a9235f64df9331b8a25e592438cd1f69d0831f72f02d9a7ada3e06b64d56c64736f6c6343000809003360a0604052306080523480156200001557600080fd5b5060006200002460016200008b565b905080156200003d576000805461ff0019166101001790555b801562000084576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50620001ac565b60008054610100900460ff161562000124578160ff166001148015620000c45750620000c2306200019d60201b620014fe1760201c565b155b6200011c5760405162461bcd60e51b815260206004820152602e60248201526000805160206200325e83398151915260448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b506000919050565b60005460ff808416911610620001835760405162461bcd60e51b815260206004820152602e60248201526000805160206200325e83398151915260448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840162000113565b506000805460ff191660ff92909216919091179055600190565b6001600160a01b03163b151590565b60805161307a620001e460003960008181610968015281816109a801528181610bcc01528181610c0c0152610c9f015261307a6000f3fe6080604052600436106101d85760003560e01c80636352211e11610102578063a22cb46511610095578063db5f6e0b11610064578063db5f6e0b146105ae578063e985e9c5146105d1578063f053dc5c1461061b578063f2fde38b1461063c57600080fd5b8063a22cb4651461052e578063aaa9e7051461054e578063b88d4fde1461056e578063c87b56dd1461058e57600080fd5b806374951931116100d157806374951931146104bb5780637bda1cdd146104db5780638da5cb5b146104fb57806395d89b411461051957600080fd5b80636352211e146104465780636ef7626c1461046657806370a0823114610486578063715018a6146104a657600080fd5b8063340a4ce41161017a57806342842e0e1161014957806342842e0e146103c55780634815d31c146103e55780634f1ef2861461041e57806352d1902d1461043157600080fd5b8063340a4ce4146103325780633659cfe614610353578063392a2b3b146103735780633ba523c7146103a057600080fd5b8063095ea7b3116101b6578063095ea7b31461026c578063150b7a021461028e57806323b872dd146102d35780632a55205a146102f357600080fd5b806301ffc9a7146101dd57806306fdde0314610212578063081812fc14610234575b600080fd5b3480156101e957600080fd5b506101fd6101f83660046125f7565b61065c565b60405190151581526020015b60405180910390f35b34801561021e57600080fd5b506102276106ae565b604051610209919061266c565b34801561024057600080fd5b5061025461024f36600461267f565b610740565b6040516001600160a01b039091168152602001610209565b34801561027857600080fd5b5061028c6102873660046126ad565b6107cd565b005b34801561029a57600080fd5b506102ba6102a93660046126d9565b630a85bd0160e11b95945050505050565b6040516001600160e01b03199091168152602001610209565b3480156102df57600080fd5b5061028c6102ee366004612778565b6108e3565b3480156102ff57600080fd5b5061031361030e3660046127b9565b610914565b604080516001600160a01b039093168352602083019190915201610209565b34801561033e57600080fd5b5061016454610254906001600160a01b031681565b34801561035f57600080fd5b5061028c61036e3660046127db565b61095d565b34801561037f57600080fd5b5061039361038e3660046128af565b610a3d565b6040516102099190612987565b3480156103ac57600080fd5b506103b76101635481565b604051908152602001610209565b3480156103d157600080fd5b5061028c6103e0366004612778565b610ba6565b3480156103f157600080fd5b506103b76104003660046126ad565b61016060209081526000928352604080842090915290825290205481565b61028c61042c3660046129cb565b610bc1565b34801561043d57600080fd5b506103b7610c92565b34801561045257600080fd5b5061025461046136600461267f565b610d45565b34801561047257600080fd5b5061028c610481366004612a1b565b610dbc565b34801561049257600080fd5b506103b76104a13660046127db565b610e96565b3480156104b257600080fd5b5061028c610ed0565b3480156104c757600080fd5b506101fd6104d63660046126ad565b610efc565b3480156104e757600080fd5b5061028c6104f6366004612ad1565b610f2f565b34801561050757600080fd5b506097546001600160a01b0316610254565b34801561052557600080fd5b5061022761108f565b34801561053a57600080fd5b5061028c610549366004612b19565b61109e565b34801561055a57600080fd5b5061028c610569366004612b45565b6110a9565b34801561057a57600080fd5b5061028c610589366004612b83565b6112b6565b34801561059a57600080fd5b506102276105a936600461267f565b6112ee565b3480156105ba57600080fd5b506103b76105c936600461267f565b506101635490565b3480156105dd57600080fd5b506101fd6105ec366004612bef565b6001600160a01b0391821660009081526101006020908152604080832093909416825291909152205460ff1690565b34801561062757600080fd5b5061015f54610254906001600160a01b031681565b34801561064857600080fd5b5061028c6106573660046127db565b611466565b60006001600160e01b031982166380ac58cd60e01b148061068d57506001600160e01b03198216635b5e139f60e01b145b806106a857506301ffc9a760e01b6001600160e01b03198316145b92915050565b606060fb80546106bd90612c28565b80601f01602080910402602001604051908101604052809291908181526020018280546106e990612c28565b80156107365780601f1061070b57610100808354040283529160200191610736565b820191906000526020600020905b81548152906001019060200180831161071957829003601f168201915b5050505050905090565b600061074b8261150d565b6107b15760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b50600090815260ff60205260409020546001600160a01b031690565b60006107d882610d45565b9050806001600160a01b0316836001600160a01b031614156108465760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016107a8565b336001600160a01b0382161480610862575061086281336105ec565b6108d45760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016107a8565b6108de838361152a565b505050565b6108ed3382611598565b6109095760405162461bcd60e51b81526004016107a890612c63565b6108de838383611682565b6000806109296097546001600160a01b031690565b9150600a83101561093c57506000610956565b606461094984600a612cca565b6109539190612cff565b90505b9250929050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156109a65760405162461bcd60e51b81526004016107a890612d13565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166109ef600080516020612ffe833981519152546001600160a01b031690565b6001600160a01b031614610a155760405162461bcd60e51b81526004016107a890612d5f565b610a1e8161181e565b60408051600080825260208201909252610a3a91839190611848565b50565b6097546060906001600160a01b03163314610a6a5760405162461bcd60e51b81526004016107a890612dab565b6000825111610aaa5760405162461bcd60e51b815260206004820152600c60248201526b1554925cc81a5b9d985b1a5960a21b60448201526064016107a8565b815167ffffffffffffffff811115610ac457610ac46127f8565b604051908082528060200260200182016040528015610aed578160200160208202803683370190505b50905060005b8251811015610b9f5761016160008154610b0c90612de0565b919050819055828281518110610b2457610b24612dfb565b602002602001018181525050610b5384838381518110610b4657610b46612dfb565b60200260200101516119c2565b610b8f828281518110610b6857610b68612dfb565b6020026020010151848381518110610b8257610b82612dfb565b6020026020010151611af5565b610b9881612de0565b9050610af3565b5092915050565b6108de838383604051806020016040528060008152506112b6565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415610c0a5760405162461bcd60e51b81526004016107a890612d13565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610c53600080516020612ffe833981519152546001600160a01b031690565b6001600160a01b031614610c795760405162461bcd60e51b81526004016107a890612d5f565b610c828261181e565b610c8e82826001611848565b5050565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610d325760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c000000000000000060648201526084016107a8565b50600080516020612ffe83398151915290565b600081815260fd60205260408120546001600160a01b0316806106a85760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016107a8565b6000610dc86001611b81565b90508015610de0576000805461ff0019166101001790555b610de8611c0e565b610df28787611c3d565b610dfa611c6e565b61016385905561015f80546001600160a01b038087166001600160a01b031992831617909255610164805492861692909116919091179055610e3b82611466565b610e4730836001611c95565b8015610e8d576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050505050565b600080610ea283611d65565b6001600160a01b03841660009081526101626020526040902054909150610ec99082612e11565b9392505050565b6097546001600160a01b03163314610efa5760405162461bcd60e51b81526004016107a890612dab565b565b6001600160a01b038216600090815261016060209081526040808320848452909152812054156106a85750600192915050565b6097546001600160a01b03163314610f595760405162461bcd60e51b81526004016107a890612dab565b6001600160a01b0384166000908152610160602090815260408083208684529091529020548211801590610f8d5750600082115b610fca5760405162461bcd60e51b815260206004820152600e60248201526d496e76616c696420636f6e66696760901b60448201526064016107a8565b8015610ff257610fed610fe56097546001600160a01b031690565b858585611dec565b610ffe565b610ffe84858585611dec565b604080516001600160a01b03861681526020810185905290810183905281151560608201527fa634be3249c22abb93400be1d5389724794784d096877c3d53294b639044e8cb9060800160405180910390a16001600160a01b03841660009081526101606020908152604080832086845290915281208054849290611084908490612e29565b909155505050505050565b606060fc80546106bd90612c28565b610c8e338383611c95565b6097546001600160a01b031633146110d35760405162461bcd60e51b81526004016107a890612dab565b6097546001600160a01b03166110e883610d45565b6001600160a01b0316146111325760405162461bcd60e51b8152602060048201526011602482015270105b1c9958591e481c1d5c98da185cd959607a1b60448201526064016107a8565b80156111ad5761116461114d6097546001600160a01b031690565b3084604051806020016040528060008152506112b6565b6001600160a01b03831660008181526101606020908152604080832086845282528083206001905592825261016290529081208054916111a383612de0565b9190505550611267565b6111d96111c26097546001600160a01b031690565b8484604051806020016040528060008152506112b6565b61015f54610164546101635460405163a2f8b71b60e01b81526001600160a01b03938416600482015292909116602483015260448201849052606482015273__$06eb37f3f4181eddff90c3bfb218879e8b$__9063a2f8b71b9060840160006040518083038186803b15801561124e57600080fd5b505af4158015611262573d6000803e3d6000fd5b505050505b604080516001600160a01b0385168152602081018490528215158183015290517f537a51646ebbf8f3aeba4c16ca1fdbbf02f1877613e2c944d789c45eb4caba0c9181900360600190a1505050565b6112c03383611598565b6112dc5760405162461bcd60e51b81526004016107a890612c63565b6112e884848484611f35565b50505050565b60606112f98261150d565b61135f5760405162461bcd60e51b815260206004820152603160248201527f45524337323155524953746f726167653a2055524920717565727920666f72206044820152703737b732bc34b9ba32b73a103a37b5b2b760791b60648201526084016107a8565b600082815261012d60205260408120805461137990612c28565b80601f01602080910402602001604051908101604052809291908181526020018280546113a590612c28565b80156113f25780601f106113c7576101008083540402835291602001916113f2565b820191906000526020600020905b8154815290600101906020018083116113d557829003601f168201915b50505050509050600061141060408051602081019091526000815290565b9050805160001415611423575092915050565b81511561145557808260405160200161143d929190612e40565b60405160208183030381529060405292505050919050565b61145e84611f68565b949350505050565b6097546001600160a01b031633146114905760405162461bcd60e51b81526004016107a890612dab565b6001600160a01b0381166114f55760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016107a8565b610a3a8161203f565b6001600160a01b03163b151590565b600090815260fd60205260409020546001600160a01b0316151590565b600081815260ff6020526040902080546001600160a01b0319166001600160a01b038416908117909155819061155f82610d45565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006115a38261150d565b6116045760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016107a8565b600061160f83610d45565b9050806001600160a01b0316846001600160a01b0316148061165757506001600160a01b038082166000908152610100602090815260408083209388168352929052205460ff165b8061145e5750836001600160a01b031661167084610740565b6001600160a01b031614949350505050565b826001600160a01b031661169582610d45565b6001600160a01b0316146116f95760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b60648201526084016107a8565b6001600160a01b03821661175b5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016107a8565b61176660008261152a565b6001600160a01b038316600090815260fe6020526040812080546001929061178f908490612e29565b90915550506001600160a01b038216600090815260fe602052604081208054600192906117bd908490612e11565b9091555050600081815260fd602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6097546001600160a01b03163314610a3a5760405162461bcd60e51b81526004016107a890612dab565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161561187b576108de83612091565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b1580156118b457600080fd5b505afa9250505080156118e4575060408051601f3d908101601f191682019092526118e191810190612e6f565b60015b6119475760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b60648201526084016107a8565b600080516020612ffe83398151915281146119b65760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b60648201526084016107a8565b506108de83838361212d565b6001600160a01b038216611a185760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016107a8565b611a218161150d565b15611a6e5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016107a8565b6001600160a01b038216600090815260fe60205260408120805460019290611a97908490612e11565b9091555050600081815260fd602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b611afe8261150d565b611b615760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b60648201526084016107a8565b600082815261012d6020908152604090912082516108de92840190612548565b60008054610100900460ff1615611bc8578160ff166001148015611ba45750303b155b611bc05760405162461bcd60e51b81526004016107a890612e88565b506000919050565b60005460ff808416911610611bef5760405162461bcd60e51b81526004016107a890612e88565b506000805460ff191660ff92909216919091179055600190565b919050565b600054610100900460ff16611c355760405162461bcd60e51b81526004016107a890612ed6565b610efa612152565b600054610100900460ff16611c645760405162461bcd60e51b81526004016107a890612ed6565b610c8e8282612182565b600054610100900460ff16610efa5760405162461bcd60e51b81526004016107a890612ed6565b816001600160a01b0316836001600160a01b03161415611cf75760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016107a8565b6001600160a01b0383811660008181526101006020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b60006001600160a01b038216611dd05760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016107a8565b506001600160a01b0316600090815260fe602052604090205490565b806001148015611e1557506001600160a01b038316600090815261016260205260409020548111155b611e535760405162461bcd60e51b815260206004820152600f60248201526e496e76616c69642062616c616e636560881b60448201526064016107a8565b6001600160a01b0383166000908152610162602052604081208054839290611e7c908490612e29565b90915550611e8d9050308584610ba6565b6097546001600160a01b038581169116146112e85761015f54610164546101635460405163a2f8b71b60e01b81526001600160a01b03938416600482015292909116602483015260448201849052606482015273__$06eb37f3f4181eddff90c3bfb218879e8b$__9063a2f8b71b9060840160006040518083038186803b158015611f1757600080fd5b505af4158015611f2b573d6000803e3d6000fd5b5050505050505050565b611f40848484611682565b611f4c848484846121d0565b6112e85760405162461bcd60e51b81526004016107a890612f21565b6060611f738261150d565b611fd75760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b60648201526084016107a8565b6000611fee60408051602081019091526000815290565b9050600081511161200e5760405180602001604052806000815250610ec9565b80612018846122dd565b604051602001612029929190612e40565b6040516020818303038152906040529392505050565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0381163b6120fe5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016107a8565b600080516020612ffe83398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b612136836123db565b6000825111806121435750805b156108de576112e8838361241b565b600054610100900460ff166121795760405162461bcd60e51b81526004016107a890612ed6565b610efa3361203f565b600054610100900460ff166121a95760405162461bcd60e51b81526004016107a890612ed6565b81516121bc9060fb906020850190612548565b5080516108de9060fc906020840190612548565b60006001600160a01b0384163b156122d257604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290612214903390899088908890600401612f73565b602060405180830381600087803b15801561222e57600080fd5b505af192505050801561225e575060408051601f3d908101601f1916820190925261225b91810190612fb0565b60015b6122b8573d80801561228c576040519150601f19603f3d011682016040523d82523d6000602084013e612291565b606091505b5080516122b05760405162461bcd60e51b81526004016107a890612f21565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061145e565b506001949350505050565b6060816123015750506040805180820190915260018152600360fc1b602082015290565b8160005b811561232b578061231581612de0565b91506123249050600a83612cff565b9150612305565b60008167ffffffffffffffff811115612346576123466127f8565b6040519080825280601f01601f191660200182016040528015612370576020820181803683370190505b5090505b841561145e57612385600183612e29565b9150612392600a86612fcd565b61239d906030612e11565b60f81b8183815181106123b2576123b2612dfb565b60200101906001600160f81b031916908160001a9053506123d4600a86612cff565b9450612374565b6123e481612091565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b6124835760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016107a8565b600080846001600160a01b03168460405161249e9190612fe1565b600060405180830381855af49150503d80600081146124d9576040519150601f19603f3d011682016040523d82523d6000602084013e6124de565b606091505b5091509150612506828260405180606001604052806027815260200161301e6027913961250f565b95945050505050565b6060831561251e575081610ec9565b82511561252e5782518084602001fd5b8160405162461bcd60e51b81526004016107a8919061266c565b82805461255490612c28565b90600052602060002090601f01602090048101928261257657600085556125bc565b82601f1061258f57805160ff19168380011785556125bc565b828001600101855582156125bc579182015b828111156125bc5782518255916020019190600101906125a1565b506125c89291506125cc565b5090565b5b808211156125c857600081556001016125cd565b6001600160e01b031981168114610a3a57600080fd5b60006020828403121561260957600080fd5b8135610ec9816125e1565b60005b8381101561262f578181015183820152602001612617565b838111156112e85750506000910152565b60008151808452612658816020860160208601612614565b601f01601f19169290920160200192915050565b602081526000610ec96020830184612640565b60006020828403121561269157600080fd5b5035919050565b6001600160a01b0381168114610a3a57600080fd5b600080604083850312156126c057600080fd5b82356126cb81612698565b946020939093013593505050565b6000806000806000608086880312156126f157600080fd5b85356126fc81612698565b9450602086013561270c81612698565b935060408601359250606086013567ffffffffffffffff8082111561273057600080fd5b818801915088601f83011261274457600080fd5b81358181111561275357600080fd5b89602082850101111561276557600080fd5b9699959850939650602001949392505050565b60008060006060848603121561278d57600080fd5b833561279881612698565b925060208401356127a881612698565b929592945050506040919091013590565b600080604083850312156127cc57600080fd5b50508035926020909101359150565b6000602082840312156127ed57600080fd5b8135610ec981612698565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715612837576128376127f8565b604052919050565b600082601f83011261285057600080fd5b813567ffffffffffffffff81111561286a5761286a6127f8565b61287d601f8201601f191660200161280e565b81815284602083860101111561289257600080fd5b816020850160208301376000918101602001919091529392505050565b600080604083850312156128c257600080fd5b82356128cd81612698565b915060208381013567ffffffffffffffff808211156128eb57600080fd5b818601915086601f8301126128ff57600080fd5b813581811115612911576129116127f8565b8060051b61292085820161280e565b918252838101850191858101908a84111561293a57600080fd5b86860192505b83831015612976578235858111156129585760008081fd5b6129668c89838a010161283f565b8352509186019190860190612940565b809750505050505050509250929050565b6020808252825182820181905260009190848201906040850190845b818110156129bf578351835292840192918401916001016129a3565b50909695505050505050565b600080604083850312156129de57600080fd5b82356129e981612698565b9150602083013567ffffffffffffffff811115612a0557600080fd5b612a118582860161283f565b9150509250929050565b60008060008060008060c08789031215612a3457600080fd5b863567ffffffffffffffff80821115612a4c57600080fd5b612a588a838b0161283f565b97506020890135915080821115612a6e57600080fd5b50612a7b89828a0161283f565b955050604087013593506060870135612a9381612698565b92506080870135612aa381612698565b915060a0870135612ab381612698565b809150509295509295509295565b80358015158114611c0957600080fd5b60008060008060808587031215612ae757600080fd5b8435612af281612698565b93506020850135925060408501359150612b0e60608601612ac1565b905092959194509250565b60008060408385031215612b2c57600080fd5b8235612b3781612698565b915061095360208401612ac1565b600080600060608486031215612b5a57600080fd5b8335612b6581612698565b925060208401359150612b7a60408501612ac1565b90509250925092565b60008060008060808587031215612b9957600080fd5b8435612ba481612698565b93506020850135612bb481612698565b925060408501359150606085013567ffffffffffffffff811115612bd757600080fd5b612be38782880161283f565b91505092959194509250565b60008060408385031215612c0257600080fd5b8235612c0d81612698565b91506020830135612c1d81612698565b809150509250929050565b600181811c90821680612c3c57607f821691505b60208210811415612c5d57634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615612ce457612ce4612cb4565b500290565b634e487b7160e01b600052601260045260246000fd5b600082612d0e57612d0e612ce9565b500490565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000600019821415612df457612df4612cb4565b5060010190565b634e487b7160e01b600052603260045260246000fd5b60008219821115612e2457612e24612cb4565b500190565b600082821015612e3b57612e3b612cb4565b500390565b60008351612e52818460208801612614565b835190830190612e66818360208801612614565b01949350505050565b600060208284031215612e8157600080fd5b5051919050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090612fa690830184612640565b9695505050505050565b600060208284031215612fc257600080fd5b8151610ec9816125e1565b600082612fdc57612fdc612ce9565b500690565b60008251612ff3818460208701612614565b919091019291505056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212207d89404e5a517bcd3ce166342accbebe016604489fdf38728b1431bf584b1e3864736f6c63430008090033496e697469616c697a61626c653a20636f6e747261637420697320616c726561";

type TokenFactory721ConstructorParams =
  | [linkLibraryAddresses: TokenFactory721LibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenFactory721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class TokenFactory721__factory extends ContractFactory {
  constructor(...args: TokenFactory721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        TokenFactory721__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: TokenFactory721LibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$06eb37f3f4181eddff90c3bfb218879e8b\\$__", "g"),
      linkLibraryAddresses[
        "contracts/tokens/TokenRoyaltiesHandler.sol:TokenRoyaltiesHandler"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenFactory721> {
    return super.deploy(overrides || {}) as Promise<TokenFactory721>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TokenFactory721 {
    return super.attach(address) as TokenFactory721;
  }
  override connect(signer: Signer): TokenFactory721__factory {
    return super.connect(signer) as TokenFactory721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenFactory721Interface {
    return new utils.Interface(_abi) as TokenFactory721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenFactory721 {
    return new Contract(address, _abi, signerOrProvider) as TokenFactory721;
  }
}

export interface TokenFactory721LibraryAddresses {
  ["contracts/tokens/TokenRoyaltiesHandler.sol:TokenRoyaltiesHandler"]: string;
}