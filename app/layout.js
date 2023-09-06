import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/Components/Navbar"
import Footer from '@/Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IT Solutions Services',
  description: 'bring solutions for your IT problems',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer />
      </body> 
    </html>
  )
}
