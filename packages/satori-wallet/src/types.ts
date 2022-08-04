/**
 * Currently supported types for tokens in the satori platform
 */
export enum TokenType {
    FAN_TOKEN,
    MASTER_CLASS,
    COLLECTIBLES
}

export type Address = string
export type TokenId = number

/**
 * A Token type is used to uniquely identify a token in the system. Token address and 
 * type should be known when the athlete is created, or when a new token is minted. 
 */
export type Token = {
    address: Address,
    type: TokenType
}
