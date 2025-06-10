import type React from "react"

export interface PulseToken {
  id: string
  symbol: string
  name: string
  icon?: string
  verified: boolean
  age: string
  marketCap: string
  volume: string
  socialLinksV2?: { type: "link" | "search" | "user" | "academic" | "sparkles" }[]
  statsV2?: { icon: React.ElementType; percentage: number; colorClass: string }[]
  txCount: string
  pumpText?: string
  fValue?: string
  txProgress?: number
}

export interface PulseData {
  newPairs: PulseToken[]
  finalStretch: PulseToken[]
  migrated: PulseToken[]
}
