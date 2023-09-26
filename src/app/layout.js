import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB-2',
  description: 'This is IMDB-2',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* NavBar */}
        {/* SearchBox */}
        {children}
      </body>
    </html>
  )
}
