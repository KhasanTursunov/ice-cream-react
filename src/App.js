import React, { useState } from 'react'
import Navbar from './components/home/navbar'
import Showcase from './components/home/showcase'
import Delivery from './components/home/delivery'
import Sugar from './components/home/sugar'
import Product from './components/home/product'

const App = () => {
  const [theme ,setTheme] =useState(false)
  return <div className={theme&& "dark"}>
              <Navbar setTheme={setTheme}/>
              <Showcase/>
              <Delivery/>
              <Sugar/>
              <Product/>
         </div>
}

export default App  