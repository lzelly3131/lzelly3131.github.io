import Navbar from './components/Navbar'
import ThemeToggle from './components/ThemeToggle'
import Hero from './components/Hero'
import Profile from './components/Profile'
import TechCarousel from './components/TechCarousel'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Navbar />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <main>
        <Hero />
        <Profile />
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
