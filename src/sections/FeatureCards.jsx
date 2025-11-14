import { features } from '../constants'

const FeatureCards = () => {
    return (
        <section id="skills" className="max-w-[90%] padding-x-lg m-auto">
            <div className="mx-auto mt-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mt-0 gap-8">
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        className="card-border rounded-xl p-7 flex flex-col gap-4 "
                    >
                        <img
                            src={feature.iconPath}
                            alt={feature.title}
                            className="w-12 h-12 m-auto"
                        />
                        <h3 className="text-center text-2xl font-semibold">
                            {feature.title}
                        </h3>
                        <p className="text-text-secondary leading-relaxed">
                            {feature.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeatureCards
