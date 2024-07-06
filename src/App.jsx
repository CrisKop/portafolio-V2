import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NavBar from './components/nav/NavBar';
import BooksPage from './pages/Books';
import Footer from './components/footer/Footer';

function ScrollToTopOnRedirect() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {

      window.scrollTo({
    top: 0,
    behavior: 'smooth'
  }); // Scroll al inicio de la página en cada cambio de ubicación
    }, 10)
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/books" element={<BooksPage />} />
        {/* Otras rutas de tu aplicación */}
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
