import { techStack } from '../constants'

const Techstack = () => {
    return (
        <div id="techstack" className="md:w-[70%] mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
                {techStack.map((tech) => {
                    const Icon = tech.icon
                    return (
                        <div
                            key={tech.name}
                            className="bg-card card-border w-36 h-36 flex flex-col items-center justify-center rounded-lg shadow-md hover:scale-105 transition-all duration-300"
                        >
                            <Icon size={46} className="mb-4 text-accent" />
                            <span className="text-md text-text font-medium">
                                {tech.name}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Techstack
