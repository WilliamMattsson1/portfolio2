import { features } from '../constants'

const FeatureCards = () => {
    return (
        <div className="w-full padding-x-lg">
            <div className="mx-auto grid-3-col">
                {features.map((feature) => (
                    <div>
                        <img src={feature.iconPath} alt="" />
                        <h2>{feature.title}</h2>
                        <p>{feature.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeatureCards
