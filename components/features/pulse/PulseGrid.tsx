"use client"

import { PulseColumn } from "./PulseColumn"
import { mockPulseData } from "@/lib/data/mockPulseData"

export function PulseGrid() {
  return (
    <div className="flex-1 overflow-hidden px-1 pt-4 pb-4">
      <div className="h-full grid grid-cols-3 gap-px bg-axiom-border-primary">
        <PulseColumn title="New Pairs" subtitle="0" tokens={mockPulseData.newPairs} presets={["P1", "P2", "P3"]} />
        <PulseColumn
          title="Final Stretch"
          subtitle="0"
          tokens={mockPulseData.finalStretch}
          presets={["P1", "P2", "P3"]}
        />
        <PulseColumn title="Migrated" subtitle="0" tokens={mockPulseData.migrated} presets={["P1", "P2", "P3"]} />
      </div>
    </div>
  )
}
