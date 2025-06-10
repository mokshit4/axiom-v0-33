"use client"

import { useState } from "react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { Dialog } from "@/components/ui/Dialog"

interface TradingSettingsDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function TradingSettingsDialog({ isOpen, onClose }: TradingSettingsDialogProps) {
  const [activePreset, setActivePreset] = useState("PRESET 2")
  const [activeTab, setActiveTab] = useState("Buy Settings")
  const [mevMode, setMevMode] = useState("Off")
  const [autoFee, setAutoFee] = useState(false)

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div className="bg-axiom-background-secondary border border-axiom-border-primary rounded-lg w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-axiom-border-primary">
          <h2 className="text-white text-lg font-medium">Trading Settings</h2>
          <button onClick={onClose} className="p-1 hover:bg-axiom-background-hover rounded">
            <XMarkIcon className="w-5 h-5 text-axiom-text-secondary" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Presets */}
          <div className="flex gap-1 bg-axiom-background-tertiary rounded-lg p-1">
            {["PRESET 1", "PRESET 2", "PRESET 3"].map((preset) => (
              <button
                key={preset}
                onClick={() => setActivePreset(preset)}
                className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                  activePreset === preset
                    ? "bg-[#6366f1] text-white"
                    : "text-axiom-text-secondary hover:text-axiom-text-primary"
                }`}
              >
                {preset}
              </button>
            ))}
          </div>

          {/* Buy/Sell Toggle */}
          <div className="flex gap-1 bg-axiom-background-tertiary rounded-lg p-1">
            {["Buy Settings", "Sell Settings"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab
                    ? "bg-axiom-accent-green text-white"
                    : "text-axiom-text-secondary hover:text-axiom-text-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Trading Parameters */}
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="bg-axiom-background-tertiary rounded-lg p-3 mb-2">
                <div className="text-white text-lg font-medium">20</div>
              </div>
              <div className="text-axiom-text-muted text-xs flex items-center justify-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                SLIPPAGE
              </div>
            </div>
            <div className="text-center">
              <div className="bg-axiom-background-tertiary rounded-lg p-3 mb-2">
                <div className="text-white text-lg font-medium">0.001</div>
              </div>
              <div className="text-axiom-text-muted text-xs flex items-center justify-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 13h8V3H9v6H3v4zm0 8h6v-2H3v2zm10 0h8v-2h-8v2zm0-4h8v-2h-8v2zm0-4h8V9h-8v4zm0-6V3h8v4h-8z" />
                </svg>
                PRIORITY
              </div>
            </div>
            <div className="text-center">
              <div className="bg-axiom-background-tertiary rounded-lg p-3 mb-2">
                <div className="text-white text-lg font-medium">0.001</div>
              </div>
              <div className="text-axiom-text-muted text-xs flex items-center justify-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                BRIBE
              </div>
            </div>
          </div>

          {/* Auto Fee */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={autoFee}
                onChange={(e) => setAutoFee(e.target.checked)}
                className="w-4 h-4 rounded border border-axiom-border-secondary bg-axiom-background-tertiary checked:bg-[#6366f1] checked:border-[#6366f1]"
              />
              <span className="text-white">Auto Fee</span>
            </label>
            <div className="bg-axiom-background-tertiary rounded-lg px-3 py-1">
              <span className="text-axiom-text-muted text-sm">MAX FEE</span>
              <span className="text-white ml-2">0.1</span>
            </div>
          </div>

          {/* MEV Mode */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-white">MEV Mode</span>
              <svg className="w-4 h-4 text-axiom-text-muted" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
            </div>
            <div className="flex gap-2">
              {["Off", "Reduced", "Secure"].map((mode) => (
                <label key={mode} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="mevMode"
                    checked={mevMode === mode}
                    onChange={() => setMevMode(mode)}
                    className="w-4 h-4"
                  />
                  <span className="text-axiom-text-secondary">{mode}</span>
                </label>
              ))}
            </div>
          </div>

          {/* RPC */}
          <div>
            <input
              type="text"
              placeholder="RPC https://a...e.com"
              className="w-full h-12 px-4 bg-axiom-background-tertiary border border-axiom-border-secondary rounded-lg text-white placeholder-axiom-text-muted focus:border-axiom-border-hover focus:outline-none"
            />
          </div>

          {/* Continue Button */}
          <button className="w-full h-12 bg-[#6366f1] hover:bg-[#7c7ff3] text-white font-medium rounded-lg transition-colors">
            Continue
          </button>
        </div>
      </div>
    </Dialog>
  )
}
