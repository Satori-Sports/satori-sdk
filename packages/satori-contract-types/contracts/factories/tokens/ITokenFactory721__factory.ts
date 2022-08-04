/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ITokenFactory721,
  ITokenFactory721Interface,
} from "../../tokens/ITokenFactory721";

const _abi = [
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
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ITokenFactory721__factory {
  static readonly abi = _abi;
  static createInterface(): ITokenFactory721Interface {
    return new utils.Interface(_abi) as ITokenFactory721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITokenFactory721 {
    return new Contract(address, _abi, signerOrProvider) as ITokenFactory721;
  }
}
