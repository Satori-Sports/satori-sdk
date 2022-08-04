import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { TokenRoyalties, TokenRoyaltiesInterface } from "../../tokens/TokenRoyalties";
export declare class TokenRoyalties__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
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
        anonymous?: undefined;
    })[];
    static createInterface(): TokenRoyaltiesInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TokenRoyalties;
}
