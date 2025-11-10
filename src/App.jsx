import Navbar from './components/Navbar'
import SectionHeader from './components/SectioHeader'
import FeatureCards from './sections/FeatureCards'
import HeroSection from './sections/HeroSection'

const App = () => {
    return (
        <main>
            <Navbar />
            <HeroSection />
            <FeatureCards />
            <SectionHeader
                title="Projects & Experience"
                highlightWord="Experience"
                sub="Check out my latest projects and tools"
            />

            {/* Footer */}
        </main>
    )
}

export default App
