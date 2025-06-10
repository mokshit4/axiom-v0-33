"use client"

import { cn } from "@/lib/utils"

interface PriceChangeProps {
  value: number
  className?: string
}

export function PriceChange({ value, className }: PriceChangeProps) {
  const isPositive = value >= 0

  return (
    <span
      className={cn(
        "text-[12px] font-medium",
        isPositive ? "text-axiom-accent-green" : "text-axiom-accent-red",
        className,
      )}
    >
      {isPositive ? "+" : ""}
      {value.toFixed(2)}%
    </span>
  )
}
