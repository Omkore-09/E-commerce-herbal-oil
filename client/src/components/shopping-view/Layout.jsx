import React from 'react'
import { Outlet } from 'react-router-dom'
import ShoppingHeader from './Header'
import Footer from './Footer'

const ShoppingLayout = () => {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
        {/* common header  */}
        <ShoppingHeader />
        <main className="flex flex-col w-full">
            <Outlet />
        </main>

        <div className="mt-5">
        <Footer />
        </div>
    </div>
  )
}

export default ShoppingLayout
