import React, {useRef, useEffect} from 'react'
import Presentation from '../components/sections/Presentation'
import Projects from '../components/sections/Projects'
import { motion, useScroll } from 'framer-motion'
import AboutMePreview from '../components/sections/aboutme/AboutMePreview'
import Books from '../components/sections/books/Books'
import Pricing from '../components/pricing/Pricing'

function Home() {



  return (
    <motion.section className="allcontainer">
      
        <Presentation/>

        <Pricing/>

        <Projects isPreview={true}/>

        <AboutMePreview/>

        <Books isPreview={true}/>
 
    </motion.section>
  )
}

export default Home