import React from 'react'
import Footer from '~/components/Footer/Footer'
import Navbar from '~/components/Navbar'

const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div className='bg-white scroll-smooth'>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default PageLayout
