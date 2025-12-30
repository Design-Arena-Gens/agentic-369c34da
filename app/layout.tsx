import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bug Hunting Academy - Learn Security Testing',
  description: 'Complete guide to learning bug bounty hunting and security testing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  )
}
