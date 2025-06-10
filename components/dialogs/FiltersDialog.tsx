"use client"

import { useState } from "react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { Dialog } from "@/components/ui/Dialog"

interface FiltersDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function FiltersDialog({ isOpen, onClose }: FiltersDialogProps) {
  const [protocols, setProtocols] = useState({
    raydium: true,
    pump: true,
    moonit: true,
  })

  const [dexPaid, setDexPaid] = useState(false)
  const [searchKeywords, setSearchKeywords] = useState("")
  const [excludeKeywords, setExcludeKeywords] = useState("")

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div className="bg-axiom-background-secondary border border-axiom-border-primary rounded-lg w-full max-w-2xl max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-axiom-border-primary">
          <h2 className="text-white text-lg font-medium">Filters</h2>
          <button onClick={onClose} className="p-1 hover:bg-axiom-background-hover rounded">
            <XMarkIcon className="w-5 h-5 text-axiom-text-secondary" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Protocols */}
          <div>
            <h3 className="text-white font-medium mb-3">Protocols</h3>
            <div className="flex gap-4">
              {Object.entries(protocols).map(([key, checked]) => (
                <label key={key} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => setProtocols((prev) => ({ ...prev, [key]: e.target.checked }))}
                    className="w-4 h-4 rounded border border-axiom-border-secondary bg-axiom-background-tertiary checked:bg-[#6366f1] checked:border-[#6366f1]"
                  />
                  <span className="text-axiom-text-secondary capitalize">{key}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Keywords */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-axiom-text-secondary text-sm mb-2">Search Keywords</label>
              <input
                type="text"
                value={searchKeywords}
                onChange={(e) => setSearchKeywords(e.target.value)}
                placeholder="keyword1, keyword2..."
                className="w-full h-10 px-3 bg-axiom-background-tertiary border border-axiom-border-secondary rounded text-white placeholder-axiom-text-muted focus:border-axiom-border-hover focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-axiom-text-secondary text-sm mb-2">Exclude Keywords</label>
              <input
                type="text"
                value={excludeKeywords}
                onChange={(e) => setExcludeKeywords(e.target.value)}
                placeholder="keyword1, keyword2..."
                className="w-full h-10 px-3 bg-axiom-background-tertiary border border-axiom-border-secondary rounded text-white placeholder-axiom-text-muted focus:border-axiom-border-hover focus:outline-none"
              />
            </div>
          </div>

          {/* Dex Paid */}
          <div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={dexPaid}
                onChange={(e) => setDexPaid(e.target.checked)}
                className="w-4 h-4 rounded border border-axiom-border-secondary bg-axiom-background-tertiary checked:bg-[#6366f1] checked:border-[#6366f1]"
              />
              <span className="text-axiom-text-secondary">Dex Paid</span>
            </label>
          </div>

          {/* Range Inputs */}
          {["Top 10 Holders %", "Liquidity ($)", "Volume ($)", "Market Cap ($)", "Txns"].map((label) => (
            <div key={label}>
              <label className="block text-axiom-text-secondary text-sm mb-2">{label}</label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Min"
                  className="h-10 px-3 bg-axiom-background-tertiary border border-axiom-border-secondary rounded text-white placeholder-axiom-text-muted focus:border-axiom-border-hover focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Max"
                  className="h-10 px-3 bg-axiom-background-tertiary border border-axiom-border-secondary rounded text-white placeholder-axiom-text-muted focus:border-axiom-border-hover focus:outline-none"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-axiom-border-primary">
          <button className="flex items-center gap-2 text-axiom-text-secondary hover:text-axiom-text-primary transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Reset
          </button>
          <button className="h-10 px-6 bg-[#6366f1] hover:bg-[#7c7ff3] text-white font-medium rounded-lg transition-colors">
            Apply all
          </button>
        </div>
      </div>
    </Dialog>
  )
}
