import Navbar from "./components/Navbar"
import Experience from "./sections/Experience"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/hero"
import Showcase from "./sections/Showcase"
import TechStack from "./sections/TechStack"

const App = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Showcase/>
            <FeatureCards/>
            <Experience/>
            <TechStack/>
        </>
    )
}

export default App