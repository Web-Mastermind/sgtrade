import React from 'react'
import Header from '@/Components/Header'
import "./global.css"
import Footer from '@/Components/Footer'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default layout