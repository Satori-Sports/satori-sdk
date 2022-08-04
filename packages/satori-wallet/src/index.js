"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3modal_1 = __importDefault(require("web3modal"));
const ethers_1 = require("ethers");
const tokens_1 = require("@satorisports/satori-contract-types/contracts/factories/tokens");
const types_1 = require("./types");
const web3_provider_1 = __importDefault(require("@walletconnect/web3-provider"));
/**
 * A wrapper for satori wallet functionality.
 * When a user wishes to connect their self-managed wallet to Satori, call connectWallet. Once a wallet is connected
 * their wallet address and token balance can be retrieved.
 *
 * Note: a wallet must be connected before other functions can be used.
 * Wallet connection is cached between sessions; the wallet will be initialised with the cached wallet if a cached
 * provider is detected. Calling disconnectWallet will clear the cached provider. Initialising this with clearCached true
 * will remove the cached provider from memory
 */
class SatoriWallet {
    /**
     * Create a satori wallet instance, initialising it if a previously configured provider exists and the clearCached is false
     *
     * @param infuraId this is the INFURA ID used for walletconnect configuration - see https://github.com/Web3Modal/web3modal/blob/master/docs/providers/walletconnect.md
     * @param clearCached if a previous cached provider exists the wallet will be initialised with this. Set this flag to
     * clear any previously cached wallets
     */
    constructor(infuraId, clearCached = false) {
        this.connected = false;
        this.web3Modal = new web3modal_1.default({
            cacheProvider: true,
            providerOptions: {
                walletconnect: {
                    package: web3_provider_1.default,
                    options: {
                        infuraId
                    }
                }
            }
        });
        if (clearCached) {
            this.web3Modal.clearCachedProvider();
        }
        else if (this.web3Modal.cachedProvider) {
            this.web3Modal.connect().then(instance => this.initialiseWallet(instance));
        }
    }
    initialiseWallet(instance) {
        return __awaiter(this, void 0, void 0, function* () {
            this.provider = new ethers_1.ethers.providers.Web3Provider(instance);
            this.signer = this.provider.getSigner();
            this.userAddress = yield this.signer.getAddress();
            this.connected = true;
        });
    }
    /**
     * Connect and initialise the satori wallet instance. This function will prompt a user to select
     * a specific type of connector (metamask or wallet connect) and request a user to sign a specific
     * message to verify. The signed meessage is returned
     *
     * @param message a message that should be provided by the server to validate a users' signature.
     * Message should be unique and contain a nonce to prevent replay attacks
     * @returns signed message that can be used to verify users' signature against their wallet
     */
    connectWallet(message) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const instance = yield this.web3Modal.connect();
            yield this.initialiseWallet(instance);
            const messageAsHex = ethers_1.ethers.utils.hexlify(ethers_1.ethers.utils.toUtf8Bytes(message));
            const signature = yield ((_a = this.signer) === null || _a === void 0 ? void 0 : _a.signMessage(messageAsHex));
            return signature;
        });
    }
    /**
     * Disconnect user wallet and clears the cached provider
     */
    disconnectWallet() {
        return __awaiter(this, void 0, void 0, function* () {
            this.provider = undefined;
            this.signer = undefined;
            this.connected = false;
            this.web3Modal.clearCachedProvider();
        });
    }
    /**
     * Get users' wallet address
     *
     * @returns connected users' address or undefined if not connected
     */
    getUserAddress() {
        return this.userAddress;
    }
    /**
     * Return current connected status for the satori wallet instance
     *
     * @returns connection status
     */
    getConnected() {
        return this.connected;
    }
    /**
     * The provider that is used to connect to the blockchain; listen for specific events from the provider
     *
     * @returns The connected RPC Provider - listen to events and react accordingly (ref: https://github.com/Web3Modal/web3modal#provider-events)
     */
    getProvider() {
        return this.provider;
    }
    /**
     * Retrieve the users' token balance (for a specific tokenId) from the blockchain.
     *
     * @param token a token to retrieve balance
     * @param tokenId a token id that exist in the token, not required if the token is a collectible
     * @throws Error if not connected, can throw exceptions if the token is not supported, or the token id does not exist
     * @returns balance of select token and token id for the configured user
     */
    getBalance(token, tokenId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.connected) {
                throw new Error("Cannot get balance, not connected");
            }
            if (token.type === types_1.TokenType.COLLECTIBLES) {
                const obj = tokens_1.TokenCollectibles721__factory.connect(token.address, this.provider);
                return (yield obj.balanceOf(this.userAddress)).toNumber();
            }
            else {
                const obj = tokens_1.Token1155__factory.connect(token.address, this.provider);
                return (yield obj.balanceOf(this.userAddress, tokenId)).toNumber();
            }
        });
    }
    purchaseToken(token, tokenId, total) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.connected) {
                throw new Error("Cannot get balance, not connected");
            }
            throw new Error("Not implemented yet");
        });
    }
    transferToken(token, tokenId, targetAddress, total) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.connected) {
                throw new Error("Cannot get balance, not connected");
            }
            throw new Error("Not implemented yet");
        });
    }
}
exports.default = SatoriWallet;
