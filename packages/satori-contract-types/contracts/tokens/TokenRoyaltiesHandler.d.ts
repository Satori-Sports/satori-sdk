import type { BaseContract, BigNumber, Signer, utils } from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface TokenRoyaltiesHandlerInterface extends utils.Interface {
    functions: {};
    events: {
        "RoyaltiesPaid(address,address,uint256,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "RoyaltiesPaid"): EventFragment;
}
export interface RoyaltiesPaidEventObject {
    token: string;
    to: string;
    tokenId: BigNumber;
    bps: BigNumber;
    amount: BigNumber;
}
export declare type RoyaltiesPaidEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], RoyaltiesPaidEventObject>;
export declare type RoyaltiesPaidEventFilter = TypedEventFilter<RoyaltiesPaidEvent>;
export interface TokenRoyaltiesHandler extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TokenRoyaltiesHandlerInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {};
    callStatic: {};
    filters: {
        "RoyaltiesPaid(address,address,uint256,uint256,uint256)"(token?: null, to?: null, tokenId?: null, bps?: null, amount?: null): RoyaltiesPaidEventFilter;
        RoyaltiesPaid(token?: null, to?: null, tokenId?: null, bps?: null, amount?: null): RoyaltiesPaidEventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
