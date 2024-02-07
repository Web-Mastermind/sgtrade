import React from 'react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import "./global.css"

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