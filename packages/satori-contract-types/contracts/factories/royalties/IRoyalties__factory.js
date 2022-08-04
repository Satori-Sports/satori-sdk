"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IRoyalties__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "entity",
                type: "address",
            },
        ],
        name: "claimRoyalties",
        outputs: [],
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
        name: "grantRoyaltiesTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "entity",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "totalUSDC",
                type: "uint256",
            },
        ],
        name: "recordRoyalties",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IRoyalties__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IRoyalties__factory = IRoyalties__factory;
IRoyalties__factory.abi = _abi;