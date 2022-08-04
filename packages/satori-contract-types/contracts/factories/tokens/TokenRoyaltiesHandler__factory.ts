/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  TokenRoyaltiesHandler,
  TokenRoyaltiesHandlerInterface,
} from "../../tokens/TokenRoyaltiesHandler";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bps",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RoyaltiesPaid",
    type: "event",
  },
];

const _bytecode =
  "0x61088e61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c8063a2f8b71b1461003a575b600080fd5b81801561004657600080fd5b5061005a610055366004610585565b61005c565b005b6000836001600160a01b0316632df58f106040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561009957600080fd5b505af11580156100ad573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526100d591908101906106ca565b5151116101295760405162461bcd60e51b815260206004820152601f60248201527f496e76616c696420726f79616c7469657320636f6e66696775726174696f6e0060448201526064015b60405180910390fd5b6000805b846001600160a01b0316632df58f106040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561016857600080fd5b505af115801561017c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526101a491908101906106ca565b515181101561050357600061271084876001600160a01b0316632df58f106040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156101ee57600080fd5b505af1158015610202573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261022a91908101906106ca565b60200151848151811061023f5761023f6107b8565b602002602001015161025191906107e4565b61025b9190610803565b90506102678184610825565b9250866001600160a01b031663c33d8c32876001600160a01b0316632df58f106040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156102b357600080fd5b505af11580156102c7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526102ef91908101906106ca565b51805185908110610302576103026107b8565b6020026020010151836040518363ffffffff1660e01b815260040161033c9291906001600160a01b03929092168252602082015260400190565b600060405180830381600087803b15801561035657600080fd5b505af115801561036a573d6000803e3d6000fd5b505050507f0f0778437355bc563276121055cc7e3ebd1185dcdb5342de3477a96af2d8811b30876001600160a01b0316632df58f106040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156103cb57600080fd5b505af11580156103df573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261040791908101906106ca565b5180518590811061041a5761041a6107b8565b602002602001015187896001600160a01b0316632df58f106040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561045e57600080fd5b505af1158015610472573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261049a91908101906106ca565b6020015186815181106104af576104af6107b8565b602090810291909101810151604080516001600160a01b03968716815295909416918501919091529183015260608201526080810183905260a00160405180910390a1506104fc8161083d565b905061012d565b508181146105665760405162461bcd60e51b815260206004820152602a60248201527f526f79616c74696573207061796d656e74206e6f742063616c63756c6174656460448201526920636f72726563746c7960b01b6064820152608401610120565b5050505050565b6001600160a01b038116811461058257600080fd5b50565b6000806000806080858703121561059b57600080fd5b84356105a68161056d565b935060208501356105b68161056d565b93969395505050506040820135916060013590565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715610604576106046105cb565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610633576106336105cb565b604052919050565b600067ffffffffffffffff821115610655576106556105cb565b5060051b60200190565b600082601f83011261067057600080fd5b815160206106856106808361063b565b61060a565b82815260059290921b840181019181810190868411156106a457600080fd5b8286015b848110156106bf57805183529183019183016106a8565b509695505050505050565b600060208083850312156106dd57600080fd5b825167ffffffffffffffff808211156106f557600080fd5b908401906040828703121561070957600080fd5b6107116105e1565b82518281111561072057600080fd5b8301601f8101881361073157600080fd5b805161073f6106808261063b565b81815260059190911b8201860190868101908a83111561075e57600080fd5b928701925b828410156107855783516107768161056d565b82529287019290870190610763565b8452505050828401518281111561079b57600080fd5b6107a78882860161065f565b948201949094529695505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156107fe576107fe6107ce565b500290565b60008261082057634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115610838576108386107ce565b500190565b6000600019821415610851576108516107ce565b506001019056fea26469706673582212209e855f0f7abfff09bc938c6795d927c888b09e66a4e83eff6588cdfac442768664736f6c63430008090033";

type TokenRoyaltiesHandlerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenRoyaltiesHandlerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenRoyaltiesHandler__factory extends ContractFactory {
  constructor(...args: TokenRoyaltiesHandlerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenRoyaltiesHandler> {
    return super.deploy(overrides || {}) as Promise<TokenRoyaltiesHandler>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TokenRoyaltiesHandler {
    return super.attach(address) as TokenRoyaltiesHandler;
  }
  override connect(signer: Signer): TokenRoyaltiesHandler__factory {
    return super.connect(signer) as TokenRoyaltiesHandler__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenRoyaltiesHandlerInterface {
    return new utils.Interface(_abi) as TokenRoyaltiesHandlerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenRoyaltiesHandler {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TokenRoyaltiesHandler;
  }
}
