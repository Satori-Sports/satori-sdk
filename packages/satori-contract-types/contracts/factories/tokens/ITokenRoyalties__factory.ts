/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ITokenRoyalties,
  ITokenRoyaltiesInterface,
} from "../../tokens/ITokenRoyalties";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getCostPerToken",
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
        name: "ownerAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "token",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "total",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "reclaim",
        type: "bool",
      },
    ],
    name: "transferPendingToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ITokenRoyalties__factory {
  static readonly abi = _abi;
  static createInterface(): ITokenRoyaltiesInterface {
    return new utils.Interface(_abi) as ITokenRoyaltiesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITokenRoyalties {
    return new Contract(address, _abi, signerOrProvider) as ITokenRoyalties;
  }
}