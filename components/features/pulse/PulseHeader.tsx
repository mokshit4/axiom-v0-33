"use client"

import { useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

export function PulseHeader() {
  const [displayMode, setDisplayMode] = useState("Display")

  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-axiom-border-primary flex-shrink-0">
      <h1 className="text-white text-2xl font-semibold">Pulse</h1>

      <div className="flex items-center gap-4">
        {/* Display Dropdown */}
        <button className="flex items-center gap-2 h-9 px-4 bg-axiom-background-tertiary text-axiom-text-secondary text-[14px] font-medium rounded-lg border border-axiom-border-secondary hover:bg-axiom-background-hover hover:border-axiom-border-hover hover:text-white transition-all duration-200">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
          </svg>
          {displayMode}
          <ChevronDownIcon className="w-4 h-4" />
        </button>

        {/* Bookmark */}
        <button className="p-2 rounded-lg hover:bg-axiom-background-hover transition-colors">
          <svg
            className="w-5 h-5 text-axiom-text-secondary hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        </button>

        {/* Sound */}
        <button className="p-2 rounded-lg hover:bg-axiom-background-hover transition-colors">
          <svg
            className="w-5 h-5 text-axiom-text-secondary hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142M6.343 6.343L4.93 4.93A1 1 0 003.515 6.343L6.343 9.17a8 8 0 000 11.314l2.829 2.828a1 1 0 001.414-1.414L7.757 19.07a6 6 0 010-8.485l2.829-2.828z"
            />
          </svg>
        </button>

        {/* Settings */}
        <button className="p-2 rounded-lg hover:bg-axiom-background-hover transition-colors">
          <svg
            className="w-5 h-5 text-axiom-text-secondary hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>

        {/* Wallet Stats */}
        <div className="flex items-center gap-2 h-9 px-3 bg-axiom-background-tertiary rounded-lg border border-axiom-border-secondary">
          <span className="text-[13px] text-white font-medium">1</span>
          <div className="w-px h-4 bg-axiom-border-secondary" />
          <span className="text-[13px] text-axiom-text-secondary">0</span>
          <ChevronDownIcon className="w-3 h-3 text-axiom-text-secondary" />
        </div>
      </div>
    </div>
  )
}
