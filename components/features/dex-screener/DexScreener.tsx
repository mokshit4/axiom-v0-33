"use client"

import { useState } from "react"
import { DexScreenerHeader } from "./DexScreenerHeader"
import { TokenTable } from "./TokenTable"
import { mockTokenData } from "@/lib/data/mockTokenData"

export function DexScreener() {
  const [activeTab, setActiveTab] = useState("DEX Screener")
  const [timeFilter, setTimeFilter] = useState("24h")
  const [showQuickBuy, setShowQuickBuy] = useState(true)

  return (
    <div className="h-full flex flex-col">
      {/* Tab Navigation */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-axiom-border-primary flex-shrink-0">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6">
            {["DEX Screener", "Trending", "Pump Live"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-lg font-medium transition-colors ${
                  activeTab === tab ? "text-white" : "text-axiom-text-secondary hover:text-axiom-text-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <DexScreenerHeader
          timeFilter={timeFilter}
          onTimeFilterChange={setTimeFilter}
          showQuickBuy={showQuickBuy}
          onQuickBuyToggle={setShowQuickBuy}
        />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-auto px-6">
        <TokenTable tokens={mockTokenData} showQuickBuy={showQuickBuy} />
      </div>
    </div>
  )
}
