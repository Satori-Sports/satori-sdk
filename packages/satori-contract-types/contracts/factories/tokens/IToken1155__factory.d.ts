import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IToken1155, IToken1155Interface } from "../../tokens/IToken1155";
export declare class IToken1155__factory {
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
    static createInterface(): IToken1155Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IToken1155;
}
