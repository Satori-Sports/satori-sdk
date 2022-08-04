import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface IToken1155Interface extends utils.Interface {
    functions: {
        "mintToken(address,uint256,uint256,string,address)": FunctionFragment;
        "purchaseToken(address,uint256,uint256,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "mintToken" | "purchaseToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "mintToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "purchaseToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<boolean>
    ]): string;
    decodeFunctionResult(functionFragment: "mintToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "purchaseToken", data: BytesLike): Result;
    events: {};
}
export interface IToken1155 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IToken1155Interface;
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
        mintToken(_to: PromiseOrValue<string>, _qty: PromiseOrValue<BigNumberish>, _price: PromiseOrValue<BigNumberish>, _tokenURI: PromiseOrValue<string>, _royaltiesConfig: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        purchaseToken(_to: PromiseOrValue<string>, _token: PromiseOrValue<BigNumberish>, _qty: PromiseOrValue<BigNumberish>, _pending: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    mintToken(_to: PromiseOrValue<string>, _qty: PromiseOrValue<BigNumberish>, _price: PromiseOrValue<BigNumberish>, _tokenURI: PromiseOrValue<string>, _royaltiesConfig: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    purchaseToken(_to: PromiseOrValue<string>, _token: PromiseOrValue<BigNumberish>, _qty: PromiseOrValue<BigNumberish>, _pending: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        mintToken(_to: PromiseOrValue<string>, _qty: PromiseOrValue<BigNumberish>, _price: PromiseOrValue<BigNumberish>, _tokenURI: PromiseOrValue<string>, _royaltiesConfig: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        purchaseToken(_to: PromiseOrValue<string>, _token: PromiseOrValue<BigNumberish>, _qty: PromiseOrValue<BigNumberish>, _pending: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        mintToken(_to: PromiseOrValue<string>, _qty: PromiseOrValue<BigNumberish>, _price: PromiseOrValue<BigNumberish>, _tokenURI: PromiseOrValue<string>, _royaltiesConfig: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        purchaseToken(_to: PromiseOrValue<string>, _token: PromiseOrValue<BigNumberish>, _qty: PromiseOrValue<BigNumberish>, _pending: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        mintToken(_to: PromiseOrValue<string>, _qty: PromiseOrValue<BigNumberish>, _price: PromiseOrValue<BigNumberish>, _tokenURI: PromiseOrValue<string>, _royaltiesConfig: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        purchaseToken(_to: PromiseOrValue<string>, _token: PromiseOrValue<BigNumberish>, _qty: PromiseOrValue<BigNumberish>, _pending: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
