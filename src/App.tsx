import Navbar from "./components/Navbar"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import About from "./sections/About"
import Footer from "./sections/Footer"
import Hero from "./sections/hero"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Testimonials from "./sections/Testimonials"

const App = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <About/>
            <Projects/>
            <Experience/>
            <Skills/>
            {/* <Testimonials/> */}
            <Contact/>
            <Footer/>
        </>
    )
}

export default App