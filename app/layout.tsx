import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "VIP EVENTS - Premium Corporate Travel & Events",
  description:
    "Elevate your corporate events and executive travel experiences with VIP EVENTS by VIP GROUP. Luxury solutions for enterprises and companies.",
  generator: "v0.app",
  keywords: ["corporate events", "executive travel", "luxury travel", "VIP events", "corporate solutions"],
  authors: [{ name: "VIP GROUP" }],
  creator: "VIP GROUP",
  publisher: "VIP GROUP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vip-events.com",
    title: "VIP EVENTS - Premium Corporate Travel & Events",
    description: "Elevate your corporate events and executive travel experiences with VIP EVENTS by VIP GROUP.",
    siteName: "VIP EVENTS",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIP EVENTS - Premium Corporate Travel & Events",
    description: "Elevate your corporate events and executive travel experiences with VIP EVENTS by VIP GROUP.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
