import React from 'react'
import LazyHero from 'react-lazy-hero'

import WithRoot from './Modules/WithRoot'
import Navbar from '../components/Navbar'

// --- Post bootstrap -----
// import ProductCategories from './Modules/Views/ProductCategories'
import ProductSmokingHero from './Modules/Views/ProductSmokingHero'
import AppFooter from './Modules/Views/AppFooter'
// import ProductHero from './Modules/Views/ProductHero'
import ProductValues from './Modules/Views/ProductValues'
// import ProductHowItWorks from './Modules/Views/ProductHowItWorks'
import ProductCTA from './Modules/Views/ProductCTA'


function Index() {
  return (
    <div>
      <Navbar />
      <LazyHero
        imageSrc="https://images.unsplash.com/flagged/photo-1588612005960-a382b1eca714?ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80" 
        parallaxOffset={100} 
        opacity={0.6}
        minHeight={'140vh'}
        style={{ overflow: 'hidden' }}>
        <h1 className='title'>Stay Home Stay Safe</h1>
        <p className='content'>Book your GP appointment online</p>
      </LazyHero>

      <ProductValues />
      <ProductCTA />
      <ProductSmokingHero />
    

      <AppFooter />
    </div>
    // <React.Fragment>
      
  // </React.Fragment>
  )
}

export default WithRoot(Index)
