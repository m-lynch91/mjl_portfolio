import Navbar from "./components/Navbar"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
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
        </>
    )
}

export default App