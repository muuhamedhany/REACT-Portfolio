import ThemeToggle from "../components/ThemeToggle"
import StarBackground from "../components/StarBackground"
import NavBar from "../components/NavBar"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import SkillsSection from "../components/SkillsSection"
import ProjectsSection from "../components/ProjectsSection"
import  ContactSection  from "../components/ContactSection"

const Home = () => {
  return (
    <div className="min-h-screen bg=background text0foreground overflow-x-hidden"> 
        <ThemeToggle />
        <StarBackground />
        <NavBar />

        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>

    </div>
  )
}

export default Home