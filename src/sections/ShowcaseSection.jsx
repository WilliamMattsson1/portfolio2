import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import { projects, showcaseTabs } from '../constants'
import ShowcaseTabs from '../components/ShowcaseTabs'
import ProjectCard from '../components/ProjectCard'

const ShowcaseSection = () => {
    const [activeTab, setActiveTab] = useState('projects')

    return (
        <section id="projects" className="mt-30 w-[90%] mx-auto">
            <SectionHeader
                title="Projects & Experience"
                highlightWord="Experience"
                sub="Check out my latest projects and tools"
            />

            <ShowcaseTabs
                tabs={showcaseTabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            {/* Tab content */}
            <div className="mt-7 md:mt-12">
                {activeTab === 'projects' ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-[90%] mx-auto">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-wrap justify-center gap-6">
                        <p className="text-text-secondary">
                            Tech stack section coming soon
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default ShowcaseSection
