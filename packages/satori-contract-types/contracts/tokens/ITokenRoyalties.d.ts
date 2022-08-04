import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface ITokenRoyaltiesInterface extends utils.Interface {
    functions: {
        "getCostPerToken(uint256)": FunctionFragment;
        "transferPendingToken(address,uint256,uint256,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getCostPerToken" | "transferPendingToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "getCostPerToken", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferPendingToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    decodeFunctionResult(functionFragment: "getCostPerToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferPendingToken", data: BytesLike): Result;
    events: {};
}
export interface ITokenRoyalties extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ITokenRoyaltiesInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        getCostPerToken(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        transferPendingToken(ownerAddress: PromiseOrValue<string>, token: PromiseOrValue<BigNumberish>, total: PromiseOrValue<BigNumberish>, reclaim: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    getCostPerToken(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    transferPendingToken(ownerAddress: PromiseOrValue<string>, token: PromiseOrValue<BigNumberish>, total: PromiseOrValue<BigNumberish>, reclaim: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getCostPerToken(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        transferPendingToken(ownerAddress: PromiseOrValue<string>, token: PromiseOrValue<BigNumberish>, total: PromiseOrValue<BigNumberish>, reclaim: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        getCostPerToken(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        transferPendingToken(ownerAddress: PromiseOrValue<string>, token: PromiseOrValue<BigNumberish>, total: PromiseOrValue<BigNumberish>, reclaim: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getCostPerToken(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferPendingToken(ownerAddress: PromiseOrValue<string>, token: PromiseOrValue<BigNumberish>, total: PromiseOrValue<BigNumberish>, reclaim: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
