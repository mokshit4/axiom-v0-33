"use client"

import { useState } from "react"
import Image from "next/image"
import { SocialLinks } from "@/components/ui/SocialLinks"
import { PriceChange } from "@/components/ui/PriceChange"
import { AuditBadge } from "@/components/ui/AuditBadge"
import { VerifiedBadge } from "@/components/ui/VerifiedBadge"
import { TokenHoverCard } from "@/components/ui/TokenHoverCard"
import type { Token } from "@/types/token"

interface TokenRowProps {
  token: Token
  showQuickBuy: boolean
}

export function TokenRow({ token, showQuickBuy }: TokenRowProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showHoverCard, setShowHoverCard] = useState(false)

  return (
    <>
      <div
        className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] px-6 py-4 hover:bg-axiom-background-hover/30 transition-colors relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Pair Info */}
        <div className="flex items-center gap-3">
          <div
            className="relative w-10 h-10 flex-shrink-0 cursor-pointer"
            onMouseEnter={() => setShowHoverCard(true)}
            onMouseLeave={() => setShowHoverCard(false)}
          >
            <Image
              src={token.icon || "/placeholder.svg?height=40&width=40"}
              alt={token.symbol}
              width={40}
              height={40}
              className={`rounded-md object-cover transition-all duration-200 ${
                isHovered ? "ring-2 ring-yellow-400 ring-opacity-60" : ""
              }`}
            />
            {token.verified && <VerifiedBadge className="absolute -bottom-1 -right-1" />}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="font-medium text-white text-[14px]">{token.symbol}</span>
              <span className="text-axiom-text-muted text-[13px] truncate">{token.name}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[12px] text-axiom-text-muted">{token.age}</span>
              <SocialLinks links={token.socialLinks} />
            </div>
          </div>
        </div>

        {/* Market Cap */}
        <div className="text-right">
          <div className="text-white font-medium text-[14px] mb-1">${token.marketCap}</div>
          <PriceChange value={token.marketCapChange} />
        </div>

        {/* Liquidity */}
        <div className="text-right">
          <div className="text-white font-medium text-[14px]">${token.liquidity}</div>
        </div>

        {/* Volume */}
        <div className="text-right">
          <div className="text-white font-medium text-[14px]">${token.volume}</div>
        </div>

        {/* TXNS */}
        <div className="text-center">
          <div className="text-white font-medium text-[14px] mb-1">{token.transactions}</div>
          <div className="flex items-center justify-center gap-1 text-[12px]">
            <span className="text-axiom-accent-green">{token.buys}</span>
            <span className="text-axiom-text-muted">/</span>
            <span className="text-axiom-accent-red">{token.sells}</span>
          </div>
        </div>

        {/* Audit Log */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <span
              className={`text-[13px] ${token.auditScore > 0 ? "text-axiom-accent-red" : "text-axiom-accent-green"}`}
            >
              {token.auditScore > 0 ? "⚡" : "⬆"} {Math.abs(token.auditScore).toFixed(2)}%
            </span>
          </div>
          <div className="flex items-center justify-center gap-1 text-[12px]">
            <span className="text-axiom-accent-green">⬆ {token.holders}%</span>
          </div>
          <AuditBadge status="Paid" className="mt-1" />
        </div>

        {/* Action */}
        <div className="flex justify-center items-center">
          <button className="h-8 w-16 bg-[#6366f1] hover:bg-[#7c7ff3] text-white text-[13px] font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg">
            Buy
          </button>
        </div>
      </div>

      {/* Hover Card */}
      {showHoverCard && <TokenHoverCard token={token} />}
    </>
  )
}
