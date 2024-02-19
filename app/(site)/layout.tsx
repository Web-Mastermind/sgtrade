import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'
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