import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface IToken721Interface extends utils.Interface {
    functions: {
        "mintMultipleTokens(address,string[])": FunctionFragment;
        "purchaseToken(address,uint256,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "mintMultipleTokens" | "purchaseToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "mintMultipleTokens", values: [PromiseOrValue<string>, PromiseOrValue<string>[]]): string;
    encodeFunctionData(functionFragment: "purchaseToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    decodeFunctionResult(functionFragment: "mintMultipleTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "purchaseToken", data: BytesLike): Result;
    events: {};
}
export interface IToken721 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IToken721Interface;
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
        mintMultipleTokens(_to: PromiseOrValue<string>, uris: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        purchaseToken(_to: PromiseOrValue<string>, _token: PromiseOrValue<BigNumberish>, _pendingPayment: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    mintMultipleTokens(_to: PromiseOrValue<string>, uris: PromiseOrValue<string>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    purchaseToken(_to: PromiseOrValue<string>, _token: PromiseOrValue<BigNumberish>, _pendingPayment: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        mintMultipleTokens(_to: PromiseOrValue<string>, uris: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;
        purchaseToken(_to: PromiseOrValue<string>, _token: PromiseOrValue<BigNumberish>, _pendingPayment: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        mintMultipleTokens(_to: PromiseOrValue<string>, uris: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        purchaseToken(_to: PromiseOrValue<string>, _token: PromiseOrValue<BigNumberish>, _pendingPayment: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        mintMultipleTokens(_to: PromiseOrValue<string>, uris: PromiseOrValue<string>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        purchaseToken(_to: PromiseOrValue<string>, _token: PromiseOrValue<BigNumberish>, _pendingPayment: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
