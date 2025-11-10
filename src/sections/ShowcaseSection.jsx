import { useState } from 'react'
import SectionHeader from '../components/SectioHeader'

const ShowcaseSection = () => {
    const [activeTab, setActiveTab] = useState('projects')

    return (
        <section className="my-22 w-[90%] mx-auto">
            {/* Header */}
            <SectionHeader
                title="Projects & Experience"
                highlightWord="Experience"
                sub="Check out my latest projects and tools"
            />

            {/* Tabs */}
            <div className="flex border card-border rounded-xl overflow-hidden w-fit mx-auto mt-6 p-3 bg-card gap-3">
                <button
                    onClick={() => setActiveTab('projects')}
                    className={`px-6 py-2 md:py-3 font-medium rounded-sm ${
                        activeTab === 'projects'
                            ? 'bg-accent '
                            : 'bg-card hover:bg-accent/70 '
                    }`}
                >
                    Projects
                </button>
                <button
                    onClick={() => setActiveTab('tech')}
                    className={`px-6 py-2 md:py-3 font-medium rounded-md ${
                        activeTab === 'tech'
                            ? 'bg-accent '
                            : 'bg-card  hover:bg-accent/70'
                    }`}
                >
                    Tech Stack
                </button>
            </div>

            {/* Tab content */}
        </section>
    )
}

export default ShowcaseSection
