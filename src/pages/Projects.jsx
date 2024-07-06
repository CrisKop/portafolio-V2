import React, {useEffect} from 'react'
import Presentation from '../components/sections/Presentation'
import Projects from '../components/sections/Projects'

function ProjectsPage() {

  useEffect(() => {
    setTimeout(() => {

      window.scrollTo({
    top: 0,
    behavior: 'smooth'
  }); // Scroll al inicio de la página en cada cambio de ubicación
    }, 10)
  }, [])

  return (
    <section className="allcontainer">

        <Projects isPreview={false}/>
        

    </section>
  )
}

export default ProjectsPage