import React from 'react'

import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Routes from '../../routes/Rounters'

const Layout = () => {
  return (
    <div>
        <Header/>
        <div>
            <Routes />
        </div>
        <Footer />
    </div>
  )
}

export default Layout