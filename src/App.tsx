import Navbar from "./components/Navbar"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import About from "./sections/About"
import Home from "./sections/Home"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"

const App = () => {
    return (
        <>
            <Navbar/>
            <Home/>
            <About/>
            <Projects/>
            <Experience/>
            <Skills/>
            <Contact/>
        </>
    )
}

export default App