import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITokenRoyalties, ITokenRoyaltiesInterface } from "../../tokens/ITokenRoyalties";
export declare class ITokenRoyalties__factory {
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
    static createInterface(): ITokenRoyaltiesInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITokenRoyalties;
}
