import { roles } from '../constants'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
    const sequence = roles.flatMap((role) => [role.text, 2000])
    return (
        <section id="hero" className="m-auto">
            <div className="hero-layout">
                <div className="text-section flex md:flex-1 flex-col">
                    <div className="hero-text ">
                        <p className="text-[34px] font-normal ">
                            Hey, <span className="text-accent">I'm</span>
                        </p>
                        <h1 className="">
                            <span className="text-accent">William</span>{' '}
                            Mattsson
                        </h1>
                        <p className="text-[28px] md:text-[40px]  font-semibold">
                            <TypeAnimation
                                sequence={sequence}
                                wrapper="span"
                                cursor={true}
                                repeat={4}
                                speed={30}
                                style={{
                                    fontWeight: '500',
                                    display: 'inline-block'
                                }}
                            />
                        </p>
                    </div>
                    <a
                        href="#projects"
                        className="bg-accent w-fit py-2 px-4 mx-auto mt-4 rounded-md hover:bg-accent-hover"
                    >
                        <div className="btn-container ">
                            <span className="font-medium">See my work</span>
                        </div>
                    </a>
                </div>

                <div className="right-side hidden md:flex flex-1">
                    <img
                        src="/images/hero-code-img.png"
                        alt="image of code editor"
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
