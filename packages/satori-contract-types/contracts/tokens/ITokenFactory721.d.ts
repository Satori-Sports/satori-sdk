import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface ITokenFactory721Interface extends utils.Interface {
    functions: {
        "createToken(string,string,uint256,address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "createToken", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    decodeFunctionResult(functionFragment: "createToken", data: BytesLike): Result;
    events: {};
}
export interface ITokenFactory721 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ITokenFactory721Interface;
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
        createToken(name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, tokenCost: PromiseOrValue<BigNumberish>, _royalties: PromiseOrValue<string>, _royaltiesConfig: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    createToken(name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, tokenCost: PromiseOrValue<BigNumberish>, _royalties: PromiseOrValue<string>, _royaltiesConfig: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        createToken(name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, tokenCost: PromiseOrValue<BigNumberish>, _royalties: PromiseOrValue<string>, _royaltiesConfig: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        createToken(name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, tokenCost: PromiseOrValue<BigNumberish>, _royalties: PromiseOrValue<string>, _royaltiesConfig: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        createToken(name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, tokenCost: PromiseOrValue<BigNumberish>, _royalties: PromiseOrValue<string>, _royaltiesConfig: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
