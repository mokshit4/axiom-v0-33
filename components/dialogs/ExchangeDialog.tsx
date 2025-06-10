"use client"

import { useState } from "react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { Dialog } from "@/components/ui/Dialog"

interface ExchangeDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function ExchangeDialog({ isOpen, onClose }: ExchangeDialogProps) {
  const [activeTab, setActiveTab] = useState("Deposit")

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div className="bg-axiom-background-secondary border border-axiom-border-primary rounded-lg w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-axiom-border-primary">
          <h2 className="text-white text-lg font-medium">Exchange</h2>
          <button onClick={onClose} className="p-1 hover:bg-axiom-background-hover rounded">
            <XMarkIcon className="w-5 h-5 text-axiom-text-secondary" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex bg-axiom-background-tertiary m-6 rounded-lg p-1">
          {["Convert", "Deposit", "Buy"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                activeTab === tab
                  ? "bg-[#6366f1] text-white"
                  : "text-axiom-text-secondary hover:text-axiom-text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-6 pt-0">
          {activeTab === "Deposit" && (
            <div className="space-y-6">
              {/* Network Selection */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 bg-axiom-background-tertiary rounded-lg px-3 py-2 flex-1 mr-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" />
                  <span className="text-white">Solana</span>
                </div>
                <div className="text-right">
                  <div className="text-axiom-text-muted text-sm">Balance:</div>
                  <div className="text-white font-medium">0 SOL</div>
                </div>
              </div>

              {/* Info */}
              <p className="text-axiom-text-secondary text-sm">
                Only deposit SOL through the Solana network for this address.
              </p>

              {/* QR Code */}
              <div className="flex gap-4">
                <div className="w-32 h-32 bg-white rounded-lg p-2 flex items-center justify-center">
                  <div className="w-full h-full bg-black rounded grid grid-cols-8 gap-px">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className={`${Math.random() > 0.5 ? "bg-white" : "bg-black"}`} />
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="text-axiom-text-muted text-sm mb-2">Deposit Address</div>
                  <div className="text-white text-sm break-all">Dkar5QFKNBEtpbwfmH3tLkEAHTm7snZXEEbtxFpWiCKB</div>
                  <button className="mt-2 p-2 hover:bg-axiom-background-hover rounded">
                    <svg
                      className="w-4 h-4 text-axiom-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Buy Link */}
              <p className="text-axiom-text-secondary text-sm">
                Don't have any Solana?{" "}
                <a href="#" className="text-[#6366f1] hover:underline">
                  Buy through Coinbase.
                </a>
              </p>

              {/* Copy Button */}
              <button className="w-full h-12 bg-[#6366f1] hover:bg-[#7c7ff3] text-white font-medium rounded-lg transition-colors">
                Copy Address
              </button>
            </div>
          )}

          {activeTab === "Convert" && (
            <div className="space-y-6">
              <p className="text-axiom-text-secondary text-sm">
                Exchange Native Solana for USDC on Hyperliquid. The minimum deposit is 6 USDC.
              </p>

              {/* Converting */}
              <div className="bg-axiom-background-tertiary rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-axiom-text-muted text-sm">Converting</span>
                  <span className="text-[#6366f1] text-sm">Balance: 0.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="0.0"
                    className="bg-transparent text-white text-2xl font-medium focus:outline-none flex-1"
                  />
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" />
                    <span className="text-white font-medium">SOL</span>
                  </div>
                </div>
              </div>

              {/* Swap Icon */}
              <div className="flex justify-center">
                <div className="w-10 h-10 bg-axiom-background-tertiary rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-axiom-text-secondary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                    />
                  </svg>
                </div>
              </div>

              {/* Gaining */}
              <div className="bg-axiom-background-tertiary rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-axiom-text-muted text-sm">Gaining</span>
                  <span className="text-axiom-text-secondary text-sm">Balance: 0</span>
                </div>
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="0.0"
                    className="bg-transparent text-white text-2xl font-medium focus:outline-none flex-1"
                  />
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full" />
                    <span className="text-white font-medium">USDC</span>
                  </div>
                </div>
              </div>

              {/* Exchange Rate */}
              <div className="text-center text-axiom-text-muted text-sm">1 SOL ≈ 155.18 USDC</div>

              {/* Confirm Button */}
              <button className="w-full h-12 bg-[#6366f1] hover:bg-[#7c7ff3] text-white font-medium rounded-lg transition-colors">
                Confirm
              </button>
            </div>
          )}

          {activeTab === "Buy" && (
            <div className="space-y-6 text-center">
              <div className="text-axiom-text-secondary">Buy functionality coming soon...</div>
            </div>
          )}
        </div>
      </div>
    </Dialog>
  )
}
