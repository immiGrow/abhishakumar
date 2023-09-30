import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abhisha Kumar - Professional Web Developer',
  description: "Explore Abhisha Kumar's captivating photography project, Unreveal, showcased on a stunning website crafted with Tailwind CSS and powered by MongoDB. As a professional web developer, Abhisha brings a unique blend of artistic vision and technical expertise to the world of photography and web design. Discover Abhisha's portfolio and get inspired today.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
