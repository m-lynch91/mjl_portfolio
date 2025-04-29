import Navbar from "./components/Navbar"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/hero"
import Showcase from "./sections/Showcase"

const App = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Showcase/>
            <FeatureCards/>
        </>
    )
}

export default App