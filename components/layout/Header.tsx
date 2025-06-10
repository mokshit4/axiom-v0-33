"use client"

import { MagnifyingGlassIcon, BellIcon, Cog6ToothIcon, StarIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

const navItems = [
  { label: "Discover", href: "/discover", active: true },
  { label: "Pulse", href: "/pulse" },
  { label: "Trackers", href: "/trackers" },
  { label: "Perpetuals", href: "/perpetuals" },
  { label: "Yield", href: "/yield" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Rewards", href: "/rewards" },
]

interface HeaderProps {
  onSearchClick: () => void
  onDepositClick: () => void
}

export function Header({ onSearchClick, onDepositClick }: HeaderProps) {
  return (
    <header className="h-[60px] bg-axiom-background-header border-b border-axiom-border-primary flex items-center px-4 flex-shrink-0">
      <div className="flex items-center justify-between w-full">
        {/* Left: Logo and Navigation */}
        <div className="flex items-center">
          {/* Axiom Logo */}
          <div className="flex items-center gap-2 mr-8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 3L21 19H3L12 3Z"
                fill="url(#axiom-gradient)"
                stroke="url(#axiom-gradient)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="axiom-gradient" x1="12" y1="3" x2="12" y2="19">
                  <stop offset="0%" stopColor="#818CF8" />
                  <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>
              </defs>
            </svg>

            <div className="flex items-baseline gap-1">
              <span className="text-white font-semibold text-[15px] tracking-tight">AXIOM</span>
              <span className="text-axiom-text-tertiary text-[11px] font-normal">Pro</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`
                  px-4 py-[18px] text-[14px] font-medium transition-colors relative
                  ${item.active ? "text-[#6366f1]" : "text-axiom-text-secondary hover:text-axiom-text-primary"}
                `}
              >
                {item.label}
                {item.active && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6366f1]" />}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <button
            onClick={onSearchClick}
            className="p-2 rounded-full hover:bg-axiom-background-hover/60 transition-colors group"
          >
            <MagnifyingGlassIcon className="w-5 h-5 text-axiom-text-secondary group-hover:text-axiom-text-primary transition-colors" />
          </button>

          {/* Deposit Button */}
          <button
            onClick={onDepositClick}
            className="h-9 px-5 bg-[#6366f1] hover:bg-[#7c7ff3] text-white text-[14px] font-medium rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            Deposit
          </button>

          {/* Star Icon */}
          <button className="p-2 rounded-full hover:bg-axiom-background-hover/60 transition-colors group">
            <StarIcon className="w-5 h-5 text-axiom-text-secondary group-hover:text-axiom-text-primary transition-colors" />
          </button>

          {/* Notification Bell */}
          <button className="p-2 rounded-full hover:bg-axiom-background-hover/60 transition-colors group">
            <BellIcon className="w-5 h-5 text-axiom-text-secondary group-hover:text-axiom-text-primary transition-colors" />
          </button>

          {/* Wallet Section */}
          <div className="flex items-center">
            <div className="flex items-center h-9 px-3 bg-axiom-background-tertiary rounded-lg border border-axiom-border-secondary hover:border-axiom-border-hover transition-colors">
              <div className="flex items-center gap-1.5 pr-2 border-r border-axiom-border-secondary">
                <div className="w-1.5 h-1.5 bg-axiom-accent-green rounded-full" />
                <span className="text-white text-[13px] font-medium">$0</span>
              </div>
              <span className="text-axiom-text-tertiary text-[12px] pl-2">0</span>
            </div>
          </div>

          {/* Grid Icon */}
          <button className="p-2 rounded-full hover:bg-axiom-background-hover/60 transition-colors group">
            <svg
              className="w-5 h-5 text-axiom-text-secondary group-hover:text-axiom-text-primary transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
            </svg>
          </button>

          {/* Settings */}
          <button className="p-2 rounded-full hover:bg-axiom-background-hover/60 transition-colors group">
            <Cog6ToothIcon className="w-5 h-5 text-axiom-text-secondary group-hover:text-axiom-text-primary transition-colors" />
          </button>

          {/* User Avatar */}
          <button className="flex items-center gap-1.5 p-1 rounded-md hover:bg-axiom-background-hover/60 transition-colors group">
            <div className="w-8 h-8 bg-axiom-action-primary rounded-full flex items-center justify-center group-hover:shadow-lg transition-all">
              <span className="text-white text-[12px] font-medium">U</span>
            </div>
            <ChevronDownIcon className="w-4 h-4 text-axiom-text-secondary group-hover:text-axiom-text-primary transition-colors" />
          </button>
        </div>
      </div>
    </header>
  )
}
