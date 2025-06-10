"use client"

export function Footer() {
  return (
    <footer className="bg-axiom-background-header border-t border-axiom-border-primary h-[36px] px-4 flex items-center justify-between flex-shrink-0">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 text-[13px] text-axiom-text-secondary bg-axiom-background-tertiary px-2 py-1 rounded border border-axiom-border-secondary">
          <span className="text-[#6366f1]">PRESET</span>
          <span>2</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-[13px] text-axiom-text-secondary">
            <span>1</span>
            <div className="w-px h-3 bg-axiom-border-secondary mx-1"></div>
            <span>0</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-[13px] text-axiom-text-secondary">
          <button className="hover:text-axiom-text-primary transition-colors">📊 Wallet Tracker</button>
          <button className="hover:text-axiom-text-primary transition-colors">🐦 Twitter Tracker</button>
          <button className="hover:text-axiom-text-primary transition-colors">📈 PnL Tracker</button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-[13px]">
          <span className="text-axiom-accent-yellow">⚠ $104.5K</span>
          <span className="text-axiom-accent-green">💰 $2545</span>
          <span className="text-axiom-accent-green">💰 $153.21</span>
        </div>

        <div className="flex items-center gap-2 text-[13px] text-axiom-accent-green">
          <span className="mr-1">•</span>
          <span>Connection is stable</span>
        </div>

        <div className="text-[13px] text-axiom-text-secondary">US-W</div>

        <div className="flex items-center gap-2">
          <span className="text-[13px] text-axiom-text-secondary">📄 Docs</span>
        </div>
      </div>
    </footer>
  )
}
