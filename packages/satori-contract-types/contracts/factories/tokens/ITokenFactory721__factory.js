"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ITokenFactory721__factory = void 0;
const ethers_1 = require("ethers");
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
class ITokenFactory721__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ITokenFactory721__factory = ITokenFactory721__factory;
ITokenFactory721__factory.abi = _abi;
