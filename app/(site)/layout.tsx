import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'
import Providers from './providers'
import "./global.css"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <Header />
      {children}
      <Footer />
    </Providers>
  )
}

export default layout