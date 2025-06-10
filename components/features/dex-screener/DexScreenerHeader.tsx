"use client"

import { useState } from "react"
import { FunnelIcon, Cog6ToothIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import { Toggle } from "@/components/ui/Toggle"
import { FiltersDialog } from "@/components/dialogs/FiltersDialog"
import { TradingSettingsDialog } from "@/components/dialogs/TradingSettingsDialog"

interface DexScreenerHeaderProps {
  timeFilter: string
  onTimeFilterChange: (filter: string) => void
  showQuickBuy: boolean
  onQuickBuyToggle: (show: boolean) => void
}

const timeFilters = ["5m", "1h", "6h", "24h"]

export function DexScreenerHeader({
  timeFilter,
  onTimeFilterChange,
  showQuickBuy,
  onQuickBuyToggle,
}: DexScreenerHeaderProps) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  return (
    <>
      <div className="flex items-center gap-4">
        {/* Time Filters */}
        <div className="flex items-center gap-1">
          {timeFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => onTimeFilterChange(filter)}
              className={`
                px-4 py-2 text-[14px] font-medium rounded-md transition-all duration-200
                ${
                  filter === timeFilter
                    ? "text-white bg-[#6366f1] shadow-lg"
                    : "text-axiom-text-secondary hover:text-axiom-text-primary hover:bg-axiom-background-hover/50"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Filter Button */}
        <button
          onClick={() => setIsFiltersOpen(true)}
          className="flex items-center gap-2 h-9 px-3 bg-axiom-background-tertiary text-axiom-text-secondary text-[14px] font-medium rounded-lg border border-axiom-border-secondary hover:bg-axiom-background-hover hover:border-axiom-border-hover transition-all duration-200"
        >
          <FunnelIcon className="w-4 h-4" />
          Filter
          <ChevronDownIcon className="w-3 h-3" />
        </button>

        {/* Stats */}
        <div className="flex items-center gap-2 h-9 px-3 bg-axiom-background-tertiary rounded-lg border border-axiom-border-secondary">
          <span className="text-[13px] text-axiom-text-secondary">1</span>
          <div className="w-px h-4 bg-axiom-border-secondary" />
          <span className="text-[13px] text-axiom-text-secondary">0</span>
        </div>

        {/* Quick Buy Toggle */}
        <div className="flex items-center gap-2">
          <Toggle checked={showQuickBuy} onChange={onQuickBuyToggle} />
          <span className="text-[14px] text-axiom-text-secondary">Quick Buy</span>
          <span className="text-[14px] text-axiom-text-secondary ml-2">0.0</span>
        </div>

        {/* Settings Button */}
        <button
          onClick={() => setIsSettingsOpen(true)}
          className="p-2 rounded-md hover:bg-axiom-background-hover/60 transition-colors group"
        >
          <Cog6ToothIcon className="w-5 h-5 text-axiom-text-secondary group-hover:text-axiom-text-primary transition-colors" />
        </button>

        {/* Preset Selector */}
        <div className="flex items-center gap-1 h-9 px-3 bg-axiom-background-tertiary text-axiom-text-secondary text-[14px] font-medium rounded-lg border border-axiom-border-secondary hover:bg-axiom-background-hover transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
          </svg>
          <span>P1</span>
          <span className="text-[#6366f1] ml-1">P2</span>
          <span className="ml-1">P3</span>
        </div>
      </div>

      <FiltersDialog isOpen={isFiltersOpen} onClose={() => setIsFiltersOpen(false)} />
      <TradingSettingsDialog isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </>
  )
}
