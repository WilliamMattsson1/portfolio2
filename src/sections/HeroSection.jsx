import { roles } from '../constants'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
    const sequence = roles.flatMap((role) => [role.text, 2000])
    return (
        <section id="hero">
            <div className="hero-layout ">
                <div className="hero-text flex-1">
                    <p className="text-[36px] text-center">
                        Hey, <span className="text-accent">I'm</span>
                    </p>
                    <h1 className="text-center">
                        <span className="text-accent ">William</span> Mattsson
                    </h1>
                    <p className="text-[36px] text-center">
                        <TypeAnimation
                            sequence={sequence}
                            wrapper="span"
                            cursor={true}
                            repeat={4}
                            speed={30}
                            style={{
                                fontSize: '36px',
                                display: 'inline-block'
                            }}
                        />
                    </p>
                </div>

                <div className="right-side flex-1">
                    <img
                        src="/images/hero-code-img.png"
                        alt="image of code editor"
                        className="xl:h-[70vh]"
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
