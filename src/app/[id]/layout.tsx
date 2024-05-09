// Next
import { Metadata } from "next"

// CSS
import "../globals.css"

export const metadata: Metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="detail-background border-y-4 border-black">{children}</body>
    </html>
  )
}
