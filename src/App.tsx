import Navbar from "./components/Navbar"
import Experience from "./sections/Experience"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import Showcase from "./sections/Showcase"

const App = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Showcase/>
            <FeatureCards/>
            <Experience/>
        </>
    )
}

export default App