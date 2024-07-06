import React, {useEffect} from 'react'
import BooksComponent from '../components/sections/books/Books'

function BooksPage() {

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

        <BooksComponent isPreview={false}/>
        

    </section>
  )
}

export default BooksPage