"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Dialog } from "@/components/ui/Dialog"

interface SearchDialogProps {
  isOpen: boolean
  onClose: () => void
}

const mockSearchResults = [
  {
    id: "1",
    symbol: "MOKOKO",
    name: "MOKOKO...",
    icon: "/placeholder.svg?height=40&width=40",
    age: "8mo",
    marketCap: "$66K",
    volume: "$14",
    liquidity: "$32K",
  },
  {
    id: "2",
    symbol: "Mokoko",
    name: "Mokoko...",
    icon: "/placeholder.svg?height=40&width=40",
    age: "3mo",
    marketCap: "$3K",
    volume: "$6",
    liquidity: "$6K",
  },
  {
    id: "3",
    symbol: "Moke",
    name: "Man-eat...",
    icon: "/placeholder.svg?height=40&width=40",
    age: "8h",
    marketCap: "$4K",
    volume: "$0",
    liquidity: "$9K",
  },
]

export function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [pumpOnly, setPumpOnly] = useState(true)
  const [ogMode, setOgMode] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div className="bg-axiom-background-secondary border border-axiom-border-primary rounded-lg w-full max-w-2xl max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-axiom-border-primary">
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setPumpOnly(!pumpOnly)}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                pumpOnly ? "bg-axiom-accent-green text-white" : "bg-axiom-background-tertiary text-axiom-text-secondary"
              }`}
            >
              ✓ Pump Only
            </button>
            <button
              onClick={() => setOgMode(!ogMode)}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                ogMode
                  ? "bg-axiom-background-hover text-white"
                  : "bg-axiom-background-tertiary text-axiom-text-secondary"
              }`}
            >
              🔥 OG Mode
            </button>
          </div>

          <div className="flex items-center justify-between">
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="mok"
              className="flex-1 text-2xl bg-transparent text-white placeholder-axiom-text-muted focus:outline-none"
            />
            <div className="bg-axiom-background-tertiary px-2 py-1 rounded text-sm text-axiom-text-muted">Esc</div>
          </div>
        </div>

        {/* Results */}
        <div className="p-6">
          <h3 className="text-axiom-text-secondary text-sm mb-4">Results</h3>
          <div className="space-y-3">
            {mockSearchResults.map((token) => (
              <div
                key={token.id}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-axiom-background-hover transition-colors cursor-pointer"
              >
                <div className="relative">
                  <Image
                    src={token.icon || "/placeholder.svg"}
                    alt={token.symbol}
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-axiom-background-secondary" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium">{token.symbol}</span>
                    <span className="text-axiom-text-muted text-sm">{token.name}</span>
                    <div className="w-4 h-4 bg-axiom-background-tertiary rounded flex items-center justify-center">
                      <span className="text-[8px] text-axiom-text-muted">📋</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-axiom-text-muted text-sm">{token.age}</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-axiom-background-tertiary rounded" />
                      <div className="w-3 h-3 bg-axiom-background-tertiary rounded" />
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm text-axiom-text-muted">MC {token.marketCap}</div>
                  <div className="text-sm text-axiom-text-muted">V {token.volume}</div>
                  <div className="text-sm text-axiom-text-muted">L {token.liquidity}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Dialog>
  )
}
