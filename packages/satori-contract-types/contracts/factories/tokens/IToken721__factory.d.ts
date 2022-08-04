import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IToken721, IToken721Interface } from "../../tokens/IToken721";
export declare class IToken721__factory {
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
    static createInterface(): IToken721Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IToken721;
}
