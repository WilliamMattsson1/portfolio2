import Navbar from './components/Navbar'
import FeatureCards from './sections/FeatureCards'
import HeroSection from './sections/HeroSection'
import ShowcaseSection from './sections/ShowcaseSection'

const App = () => {
    return (
        <main>
            <Navbar />
            <HeroSection />
            <FeatureCards />
            <ShowcaseSection />

            {/* Footer */}
        </main>
    )
}

export default App
