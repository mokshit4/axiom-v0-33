"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { PulseHeader } from "@/components/features/pulse/PulseHeader"
import { PulseGrid } from "@/components/features/pulse/PulseGrid"
import { SearchDialog } from "@/components/dialogs/SearchDialog"
import { ExchangeDialog } from "@/components/dialogs/ExchangeDialog"

export default function PulsePage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isExchangeOpen, setIsExchangeOpen] = useState(false)

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !isSearchOpen) {
        e.preventDefault()
        setIsSearchOpen(true)
      }
      if (e.key === "Escape") {
        setIsSearchOpen(false)
        setIsExchangeOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isSearchOpen])

  return (
    <div className="flex flex-col h-screen bg-axiom-background-primary">
      <Header onSearchClick={() => setIsSearchOpen(true)} onDepositClick={() => setIsExchangeOpen(true)} />

      <main className="flex-1 overflow-hidden flex flex-col">
        <PulseHeader />
        <PulseGrid />
      </main>

      <Footer />

      <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <ExchangeDialog isOpen={isExchangeOpen} onClose={() => setIsExchangeOpen(false)} />
    </div>
  )
}
