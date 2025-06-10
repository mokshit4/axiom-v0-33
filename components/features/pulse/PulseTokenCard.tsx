"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import type { PulseToken } from "@/types/pulse"
import { LinkIcon, MagnifyingGlassIcon, UserIcon, AcademicCapIcon, SparklesIcon } from "@heroicons/react/24/outline"
import { ClipboardIcon } from "@heroicons/react/24/solid"

interface PulseTokenCardProps {
  token: PulseToken
}

const StatIcon = ({
  icon: Icon,
  percentage,
  colorClass,
}: { icon: React.ElementType; percentage: number; colorClass: string }) => (
  <div className={`flex items-center gap-0.5 text-[10px] ${colorClass}`}>
    <Icon className="w-2.5 h-2.5" />
    <span>{percentage}%</span>
  </div>
)

export function PulseTokenCard({ token }: PulseTokenCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "link":
        return LinkIcon
      case "search":
        return MagnifyingGlassIcon
      case "user":
        return UserIcon
      case "academic":
        return AcademicCapIcon
      case "sparkles":
        return SparklesIcon
      default:
        return LinkIcon
    }
  }

  return (
    <div
      className="bg-axiom-background-tertiary border border-axiom-border-primary rounded-md p-2.5 hover:border-axiom-border-hover hover:bg-axiom-background-hover/30 transition-all duration-150 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex gap-2.5">
        {/* Left: Image and pump text */}
        <div className="flex-shrink-0 w-[60px] text-center">
          <div className="relative w-[60px] h-[60px]">
            <Image
              src={token.icon || `/placeholder.svg?height=60&width=60&query=${token.symbol}`}
              alt={token.symbol}
              width={60}
              height={60}
              className="rounded-md object-cover"
            />
            {token.verified && (
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-axiom-accent-green rounded-full border-2 border-axiom-background-tertiary flex items-center justify-center">
                <svg width="7" height="7" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
          {token.pumpText && <p className="text-[9px] text-axiom-text-muted mt-1 truncate">{token.pumpText}</p>}
        </div>

        {/* Right: Token Info & Stats */}
        <div className="flex-1 min-w-0">
          {/* Top line: Symbol, Name, Copy, MC, Volume */}
          <div className="flex justify-between items-start mb-0.5">
            <div className="flex-1 min-w-0">
              <div className="flex items-center">
                <span className="text-white font-semibold text-[13px] mr-1.5">{token.symbol}</span>
                <span className="text-axiom-text-secondary text-[12px] truncate mr-1">{token.name}</span>
                <ClipboardIcon className="w-3 h-3 text-axiom-text-muted hover:text-axiom-text-secondary transition-colors" />
              </div>
            </div>
            <div className="text-right flex-shrink-0 ml-2">
              <div className="text-white font-semibold text-[13px]">MC ${token.marketCap}</div>
              <div className="text-axiom-text-secondary text-[11px] mt-px">V ${token.volume}</div>
            </div>
          </div>

          {/* Second line: Age, Social Icons, F, TX, Progress */}
          <div className="flex justify-between items-center mb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="text-axiom-accent-green text-[11px] font-medium">{token.age}</span>
              {token.socialLinksV2?.map((socialIcon, index) => {
                const IconComponent = getSocialIcon(socialIcon.type)
                return (
                  <IconComponent
                    key={index}
                    className="w-3 h-3 text-axiom-text-muted hover:text-axiom-text-secondary transition-colors"
                  />
                )
              })}
            </div>
            <div className="flex items-center gap-1.5 text-right">
              {token.fValue && (
                <span className="text-axiom-text-secondary text-[10px]">
                  F <span className="text-axiom-accent-blue">{token.fValue}</span>
                </span>
              )}
              <span className="text-axiom-text-secondary text-[10px]">TX {token.txCount}</span>
              <div className="w-6 h-0.5 bg-axiom-border-secondary rounded-full overflow-hidden">
                <div className="h-full bg-axiom-accent-green" style={{ width: `${token.txProgress || 0}%` }} />
              </div>
            </div>
          </div>

          {/* Third line: Stat Icons */}
          {token.statsV2 && (
            <div className="flex items-center gap-2">
              {token.statsV2.map((stat, index) => (
                <StatIcon key={index} icon={stat.icon} percentage={stat.percentage} colorClass={stat.colorClass} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
