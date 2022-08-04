/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface TokenFactory1155Interface extends utils.Interface {
  functions: {
    "createToken(address)": FunctionFragment;
    "token1155Implementation()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "createToken" | "token1155Implementation"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createToken",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "token1155Implementation",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "createToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "token1155Implementation",
    data: BytesLike
  ): Result;

  events: {
    "TokenCreated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TokenCreated"): EventFragment;
}

export interface TokenCreatedEventObject {
  tokenAddress: string;
}
export type TokenCreatedEvent = TypedEvent<[string], TokenCreatedEventObject>;

export type TokenCreatedEventFilter = TypedEventFilter<TokenCreatedEvent>;

export interface TokenFactory1155 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TokenFactory1155Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createToken(
      _royalties: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    token1155Implementation(overrides?: CallOverrides): Promise<[string]>;
  };

  createToken(
    _royalties: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  token1155Implementation(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    createToken(
      _royalties: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    token1155Implementation(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "TokenCreated(address)"(tokenAddress?: null): TokenCreatedEventFilter;
    TokenCreated(tokenAddress?: null): TokenCreatedEventFilter;
  };

  estimateGas: {
    createToken(
      _royalties: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    token1155Implementation(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createToken(
      _royalties: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    token1155Implementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
