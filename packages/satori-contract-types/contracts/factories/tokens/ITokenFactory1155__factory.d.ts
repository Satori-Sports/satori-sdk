import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITokenFactory1155, ITokenFactory1155Interface } from "../../tokens/ITokenFactory1155";
export declare class ITokenFactory1155__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ITokenFactory1155Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITokenFactory1155;
}
