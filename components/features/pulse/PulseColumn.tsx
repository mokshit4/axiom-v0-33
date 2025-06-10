"use client"

import { PulseTokenCard } from "./PulseTokenCard"
import type { PulseToken } from "@/types/pulse"

interface PulseColumnProps {
  title: string
  subtitle: string
  tokens: PulseToken[]
  presets: string[]
}

export function PulseColumn({ title, subtitle, tokens, presets }: PulseColumnProps) {
  return (
    <div className="flex flex-col h-full p-3 bg-axiom-background-secondary">
      {/* Column Header */}
      <div className="flex items-center justify-between mb-2 pb-2 flex-shrink-0">
        <div className="flex items-center gap-2">
          <h2 className="text-white text-[14px] font-medium">{title}</h2>
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3 text-[#f59e0b]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-[#94a3b8] text-[13px]">{subtitle}</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <div className="flex items-center gap-0.5">
            {presets.map((preset, index) => (
              <button
                key={preset}
                className={`px-2 py-1 text-[11px] font-medium rounded transition-colors ${
                  index === 0
                    ? "bg-[#6366f1] text-white"
                    : "text-axiom-text-secondary hover:text-white hover:bg-axiom-background-hover"
                }`}
              >
                {preset}
              </button>
            ))}
          </div>
          <button className="p-1 rounded hover:bg-axiom-background-hover transition-colors">
            <svg
              className="w-3 h-3 text-axiom-text-secondary hover:text-white transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable Token List */}
      <div className="flex-1 overflow-y-auto space-y-1.5 pr-1 pb-1">
        {tokens.map((token) => (
          <PulseTokenCard key={token.id} token={token} />
        ))}
      </div>
    </div>
  )
}
