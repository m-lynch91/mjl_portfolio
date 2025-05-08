import Navbar from "./components/Navbar"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import FeatureCards from "./sections/FeatureCards"
import Footer from "./sections/Footer"
import Hero from "./sections/hero"
import Showcase from "./sections/Showcase"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"

const App = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <FeatureCards/>
            <Showcase/>
            <Experience/>
            <TechStack/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App