const ShowcaseTabs = ({ tabs, activeTab, setActiveTab }) => (
    <div className="flex border card-border rounded-xl w-fit mx-auto mt-5 md:mt-10 p-3 bg-card gap-3">
        {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id

            return (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-col items-center gap-0 px-8 md:px-18 py-2 md:py-3 rounded-lg font-medium transition-colors
                        ${
                            isActive
                                ? 'bg-accent/20 text-white'
                                : 'bg-card hover:cursor-pointer hover:bg-accent/10 text-text/90'
                        }`}
                >
                    <span
                        className={`text-lg transition-colors ${
                            isActive ? 'text-accent' : 'text-text/70'
                        }`}
                    >
                        <Icon
                            className={isActive ? 'text-accent' : ''}
                            size={20}
                        />
                    </span>
                    <span className="text-sm md:text-base">{tab.label}</span>
                </button>
            )
        })}
    </div>
)

export default ShowcaseTabs
