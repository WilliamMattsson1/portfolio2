const SectionHeader = ({ title, sub, highlightWord }) => {
    const titleParts = title.split(' ').map((word, index) => {
        if (word === highlightWord) {
            return (
                <span key={index} className="text-accent">
                    {word}{' '}
                </span>
            )
        }
        return word + ' '
    })

    return (
        <div className="flex flex-col items-center gap-1">
            <h2 className="font-medium md:text-4xl text-2xl">{titleParts}</h2>
            {sub && (
                <div>
                    <p className="text-lg md:text-2xl font-extralight">{sub}</p>
                </div>
            )}
        </div>
    )
}

export default SectionHeader
