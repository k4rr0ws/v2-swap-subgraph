import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0x527af259d3d910cd86a022f922b74270fbe4d40f';

export const REFERENCE_TOKEN = '0xa1077a294dde1b09bb078844df40758a5d0f9a27'; // WPLS
export const STABLE_TOKEN_PAIRS = [
  '0xbab54d99da875fb9016f9e847ed75c099f447a9f' // WPLS/DAI pair
];

export const WHITELIST: string[] = [
  '0xa1077a294dde1b09bb078844df40758a5d0f9a27', // WPLS
  '0xefd766ccb38eaf1dfd701853bfce31359239f305', // DAI
];

export const STABLECOINS = [
  '0xefd766ccb38eaf1dfd701853bfce31359239f305', // DAI
];

// thresholds (see notes below)
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('1');
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH  = BigDecimal.fromString('0.01');

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = []

export const SKIP_TOTAL_SUPPLY: string[] = []