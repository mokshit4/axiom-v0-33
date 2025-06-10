"use client"

import { cn } from "@/lib/utils"

interface AuditBadgeProps {
  status: "Paid" | "Pending" | "Failed"
  className?: string
}

export function AuditBadge({ status, className }: AuditBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center px-1.5 py-0.5 rounded text-[10px] font-medium",
        {
          "bg-axiom-accent-green-muted text-axiom-accent-green": status === "Paid",
          "bg-axiom-accent-yellow/20 text-axiom-accent-yellow": status === "Pending",
          "bg-axiom-accent-red-muted text-axiom-accent-red": status === "Failed",
        },
        className,
      )}
    >
      <span className="mr-0.5">•</span>
      {status}
    </div>
  )
}
