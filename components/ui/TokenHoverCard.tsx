"use client"

import Image from "next/image"
import type { Token } from "@/types/token"

interface TokenHoverCardProps {
  token: Token
}

export function TokenHoverCard({ token }: TokenHoverCardProps) {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      <div className="bg-axiom-background-secondary border border-axiom-border-primary rounded-lg p-6 max-w-md w-full mx-4 shadow-2xl pointer-events-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <Image
            src={token.icon || "/placeholder.svg?height=60&width=60"}
            alt={token.symbol}
            width={60}
            height={60}
            className="rounded-lg"
          />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-white font-semibold text-lg">{token.symbol}</h3>
              <span className="text-axiom-text-muted text-sm">{token.name}</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-axiom-text-muted text-sm">{token.age}</span>
              <div className="flex gap-1">
                {/* Social Icons */}
                <div className="w-4 h-4 bg-axiom-background-tertiary rounded flex items-center justify-center">
                  <span className="text-[8px] text-axiom-text-muted">X</span>
                </div>
                <div className="w-4 h-4 bg-axiom-background-tertiary rounded flex items-center justify-center">
                  <span className="text-[8px] text-axiom-text-muted">🌐</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banner Image */}
        <div className="w-full h-32 bg-gradient-to-r from-blue-400 to-teal-400 rounded-lg mb-4 flex items-center justify-center">
          <div className="text-white font-bold text-xl">COSTCO</div>
        </div>

        {/* Social Media Post */}
        <div className="bg-axiom-background-tertiary rounded-lg p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-white font-medium">${token.symbol.toLowerCase()}</span>
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>

          <p className="text-axiom-text-secondary text-sm mb-3">
            ca: 4veK9R9GxmgxqkFhTa2VnE6MJ4YfTxnr92HF5gH5LcAF → NO TG!
            <br />
            brian at costco is the new wojak at mcdonalds. we will revenge-meme
          </p>

          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-6 h-6 bg-axiom-background-primary rounded-full border border-axiom-border-secondary"
                />
              ))}
            </div>
            <span className="text-axiom-text-secondary text-sm">1.43K Members</span>
          </div>
        </div>

        {/* Creator */}
        <div className="border-t border-axiom-border-primary pt-4">
          <p className="text-axiom-text-muted text-sm mb-2">Created by</p>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-axiom-background-primary rounded-full" />
            <div>
              <div className="flex items-center gap-1">
                <span className="text-white font-medium">burgesa</span>
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-[8px]">✓</span>
                </div>
              </div>
              <span className="text-axiom-text-muted text-sm">@0xburgesa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
