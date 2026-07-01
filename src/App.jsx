import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechCarousel from './components/TechCarousel'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechCarousel />
        <Experience />
        <Education />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
