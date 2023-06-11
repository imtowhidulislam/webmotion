import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from './utils/Navbar'
import Footer from './utils/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Web Motion',
  description: 'Created by Towhidul Islam',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
