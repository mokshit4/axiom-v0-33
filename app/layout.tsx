import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Axiom Pro - DeFi Trading Platform",
  description: "Professional DeFi trading and analytics platform",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter bg-axiom-background-primary text-axiom-text-primary antialiased overflow-hidden">
        {children}
      </body>
    </html>
  )
}
