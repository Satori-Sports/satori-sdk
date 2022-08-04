import Web3Modal from "web3modal"
import { ethers } from "ethers"
import { Token1155__factory, TokenCollectibles721__factory } from "@satorisports/satori-contract-types/contracts/factories/tokens"
import { TokenType, Token, TokenId, Address } from "./types"
import WalletConnectProvider from "@walletconnect/web3-provider"

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
    private provider: ethers.providers.JsonRpcProvider | undefined
    private signer: ethers.Signer | undefined
    private userAddress: Address | undefined
    private connected: boolean

    private web3Modal: Web3Modal

    /**
     * Create a satori wallet instance, initialising it if a previously configured provider exists and the clearCached is false
     * 
     * @param infuraId this is the INFURA ID used for walletconnect configuration - see https://github.com/Web3Modal/web3modal/blob/master/docs/providers/walletconnect.md
     * @param clearCached if a previous cached provider exists the wallet will be initialised with this. Set this flag to
     * clear any previously cached wallets
     */
    constructor(infuraId: string, clearCached: boolean = false) {
        this.connected = false
        this.web3Modal = new Web3Modal({
            cacheProvider: true,
            providerOptions: {
                walletconnect: {
                    package: WalletConnectProvider,
                    options: {
                        infuraId
                    }
                }
            }
        })
        if (clearCached) {
            this.web3Modal.clearCachedProvider()
        }
        else if (this.web3Modal.cachedProvider) {
            this.web3Modal.connect().then(instance => this.initialiseWallet(instance))
        }
    }

    private async initialiseWallet(instance: any) {
        this.provider = new ethers.providers.Web3Provider(instance)
        this.signer = this.provider.getSigner()
        this.userAddress = await this.signer.getAddress()
        this.connected = true
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
    async connectWallet(message: string): Promise<string> {
        const instance = await this.web3Modal.connect()
        await this.initialiseWallet(instance)
        const messageAsHex = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(message))
        const signature = await this.signer?.signMessage(messageAsHex)
        return signature!
    }

    /**
     * Disconnect user wallet and clears the cached provider
     */
    async disconnectWallet() {
        this.provider = undefined
        this.signer = undefined
        this.connected = false
        this.web3Modal.clearCachedProvider()
    }

    /**
     * Get users' wallet address
     * 
     * @returns connected users' address or undefined if not connected
     */
    getUserAddress(): Address | undefined {
        return this.userAddress
    }

    /**
     * Return current connected status for the satori wallet instance
     * 
     * @returns connection status
     */
    getConnected(): boolean {
        return this.connected
    }

    /**
     * The provider that is used to connect to the blockchain; listen for specific events from the provider
     * 
     * @returns The connected RPC Provider - listen to events and react accordingly (ref: https://github.com/Web3Modal/web3modal#provider-events)
     */
    getProvider(): ethers.providers.JsonRpcProvider {
        return this.provider!
    }

    /**
     * Retrieve the users' token balance (for a specific tokenId) from the blockchain. 
     * 
     * @param token a token to retrieve balance
     * @param tokenId a token id that exist in the token, not required if the token is a collectible
     * @throws Error if not connected, can throw exceptions if the token is not supported, or the token id does not exist
     * @returns balance of select token and token id for the configured user
     */
    async getBalance(token: Token, tokenId: TokenId): Promise<number> {
        if (!this.connected) {
            throw new Error("Cannot get balance, not connected")
        }

        if (token.type === TokenType.COLLECTIBLES) {
            const obj = TokenCollectibles721__factory.connect(token.address, this.provider!)
            return (await obj.balanceOf(this.userAddress!)).toNumber()
        }
        else {
            const obj = Token1155__factory.connect(token.address, this.provider!)
            return (await obj.balanceOf(this.userAddress!, tokenId)).toNumber()
        }
    }

    async purchaseToken(token: Token, tokenId: TokenId, total: number) {
        if (!this.connected) {
            throw new Error("Cannot get balance, not connected")
        }

        throw new Error("Not implemented yet")
    }

    async transferToken(token: Token, tokenId: TokenId, targetAddress: Address, total: number) {
        if (!this.connected) {
            throw new Error("Cannot get balance, not connected")
        }

        throw new Error("Not implemented yet")
    }
}

export default SatoriWallet