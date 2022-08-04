import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITokenFactory721, ITokenFactory721Interface } from "../../tokens/ITokenFactory721";
export declare class ITokenFactory721__factory {
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
    static createInterface(): ITokenFactory721Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITokenFactory721;
}
