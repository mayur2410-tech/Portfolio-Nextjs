import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mayur Waykar',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="https://github.com/mayur2410-tech/Portfolio-Website/blob/main/src/assests/profilephoto.jpg?raw=true" type="image/x-icon" />
      </head>

      <body>{children}</body>
    </html>
  )
}
