import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface IRoyaltiesInterface extends utils.Interface {
    functions: {
        "claimRoyalties(address)": FunctionFragment;
        "grantRoyaltiesTo(address)": FunctionFragment;
        "recordRoyalties(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "claimRoyalties" | "grantRoyaltiesTo" | "recordRoyalties"): FunctionFragment;
    encodeFunctionData(functionFragment: "claimRoyalties", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "grantRoyaltiesTo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "recordRoyalties", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "claimRoyalties", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRoyaltiesTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "recordRoyalties", data: BytesLike): Result;
    events: {};
}
export interface IRoyalties extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IRoyaltiesInterface;
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
        claimRoyalties(entity: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        grantRoyaltiesTo(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        recordRoyalties(entity: PromiseOrValue<string>, totalUSDC: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    claimRoyalties(entity: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    grantRoyaltiesTo(account: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    recordRoyalties(entity: PromiseOrValue<string>, totalUSDC: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        claimRoyalties(entity: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        grantRoyaltiesTo(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        recordRoyalties(entity: PromiseOrValue<string>, totalUSDC: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        claimRoyalties(entity: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        grantRoyaltiesTo(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        recordRoyalties(entity: PromiseOrValue<string>, totalUSDC: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        claimRoyalties(entity: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        grantRoyaltiesTo(account: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        recordRoyalties(entity: PromiseOrValue<string>, totalUSDC: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
