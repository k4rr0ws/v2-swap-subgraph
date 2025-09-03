import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0x527Af259D3D910CD86A022f922B74270FBE4D40F'

export const REFERENCE_TOKEN = '0xA1077a294dDE1B09bB078844df40758a5D0f9a27'
export const STABLE_TOKEN_PAIRS = ['0xBAb54D99dA875fb9016f9E847eD75c099f447a9f']

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = [
  '0xA1077a294dDE1B09bB078844df40758a5D0f9a27', // PLS
  '0xefD766cCb38EaF1dfd701853BFCe31359239F305', // DAI
]

export const STABLECOINS = [
  '0xefD766cCb38EaF1dfd701853BFCe31359239F305', // DAI
]

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('10000')

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('1')

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = []

export const SKIP_TOTAL_SUPPLY: string[] = []