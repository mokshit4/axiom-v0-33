"use client"

import { useState } from "react"

interface SocialLinksProps {
  links: {
    twitter?: string
    telegram?: string
    website?: string
  }
}

export function SocialLinks({ links }: SocialLinksProps) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  return (
    <div className="flex items-center gap-1 relative">
      {links.twitter && (
        <div className="relative">
          <a
            href={links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-4 h-4 rounded bg-axiom-background-tertiary flex items-center justify-center hover:bg-axiom-background-hover transition-colors"
            onMouseEnter={() => setHoveredLink("twitter")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18 3H6C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3Z"
                fill="#1D1D1D"
                stroke="#94A3B8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {hoveredLink === "twitter" && (
            <div className="absolute top-6 left-0 bg-axiom-background-tertiary border border-axiom-border-secondary rounded px-2 py-1 text-[11px] text-axiom-text-secondary whitespace-nowrap z-10">
              x.com
              <div className="text-[10px] text-axiom-text-muted">https://x.com/Matt_Furie/status/...</div>
            </div>
          )}
        </div>
      )}

      {links.telegram && (
        <a
          href={links.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="w-4 h-4 rounded bg-axiom-background-tertiary flex items-center justify-center hover:bg-axiom-background-hover transition-colors"
        >
          <span className="text-[8px] text-axiom-text-muted">T</span>
        </a>
      )}

      {links.website && (
        <a
          href={links.website}
          target="_blank"
          rel="noopener noreferrer"
          className="w-4 h-4 rounded bg-axiom-background-tertiary flex items-center justify-center hover:bg-axiom-background-hover transition-colors"
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#94A3B8" strokeWidth="2" />
            <path
              d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
              stroke="#94A3B8"
              strokeWidth="2"
            />
            <path d="M2 12H22" stroke="#94A3B8" strokeWidth="2" />
          </svg>
        </a>
      )}
    </div>
  )
}
