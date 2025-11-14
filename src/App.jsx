import Navbar from './components/Navbar'
import ContactSection from './sections/ContactSection'
import FeatureCards from './sections/FeatureCards'
import Footer from './sections/Footer'
import HeroSection from './sections/HeroSection'
import ShowcaseSection from './sections/ShowcaseSection'

const App = () => {
    return (
        <main>
            <Navbar />
            <HeroSection />
            <FeatureCards />
            <ShowcaseSection />
            <ContactSection />
            <Footer />
        </main>
    )
}

export default App
