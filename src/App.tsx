import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllProjects from './components/AllProjects';
import AllBlogs from './components/AllBlogs';

function HomePage() {
  return (
    <main>
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Blog />
      <Contact />
    </main>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/allprojects" element={<AllProjects />} />
          <Route path="/blogs" element={<AllBlogs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;