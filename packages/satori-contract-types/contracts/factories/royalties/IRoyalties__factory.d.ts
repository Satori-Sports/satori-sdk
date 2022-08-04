import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IRoyalties, IRoyaltiesInterface } from "../../royalties/IRoyalties";
export declare class IRoyalties__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IRoyaltiesInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IRoyalties;
}
