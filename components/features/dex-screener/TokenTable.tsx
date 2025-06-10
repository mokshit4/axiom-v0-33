"use client"

import { TokenRow } from "./TokenRow"
import type { Token } from "@/types/token"

interface TokenTableProps {
  tokens: Token[]
  showQuickBuy: boolean
}

export function TokenTable({ tokens, showQuickBuy }: TokenTableProps) {
  return (
    <div className="bg-[#131720] rounded-lg border border-axiom-border-primary overflow-hidden my-6">
      {/* Table Header */}
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] px-6 py-3 bg-[#1a1f2e] border-b border-axiom-border-primary">
        <div className="text-[11px] font-medium text-axiom-text-muted uppercase tracking-wider">Pair Info</div>
        <div className="text-[11px] font-medium text-axiom-text-muted uppercase tracking-wider text-right">
          Market Cap
        </div>
        <div className="text-[11px] font-medium text-axiom-text-muted uppercase tracking-wider text-right">
          Liquidity
        </div>
        <div className="text-[11px] font-medium text-axiom-text-muted uppercase tracking-wider text-right">Volume</div>
        <div className="text-[11px] font-medium text-axiom-text-muted uppercase tracking-wider text-center">TXNS</div>
        <div className="text-[11px] font-medium text-axiom-text-muted uppercase tracking-wider text-center">
          Audit Log
        </div>
        <div className="text-[11px] font-medium text-axiom-text-muted uppercase tracking-wider text-center">Action</div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-axiom-border-primary">
        {tokens.map((token) => (
          <TokenRow key={token.id} token={token} showQuickBuy={showQuickBuy} />
        ))}
      </div>
    </div>
  )
}
