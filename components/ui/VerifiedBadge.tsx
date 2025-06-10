"use client"

import { cn } from "@/lib/utils"

interface VerifiedBadgeProps {
  className?: string
}

export function VerifiedBadge({ className }: VerifiedBadgeProps) {
  return (
    <div
      className={cn(
        "w-4 h-4 bg-axiom-background-tertiary rounded-sm flex items-center justify-center border border-axiom-border-secondary",
        className,
      )}
    >
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6L9 17L4 12" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}
