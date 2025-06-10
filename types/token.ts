export interface Token {
  id: string
  symbol: string
  name: string
  icon: string
  verified: boolean
  age: string
  marketCap: string
  marketCapChange: number
  liquidity: string
  volume: string
  transactions: string
  buys: string
  sells: string
  auditScore: number
  holders: number
  socialLinks: {
    twitter?: string
    telegram?: string
    website?: string
  }
}
