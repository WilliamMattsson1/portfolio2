import { useState } from 'react'
import SectionHeader from '../components/SectioHeader'
import { projects } from '../constants'

const ShowcaseSection = () => {
    const [activeTab, setActiveTab] = useState('projects')

    return (
        <section id="projects" className="my-22 w-[90%] mx-auto">
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
            <div className="mt-6">
                {activeTab === 'projects' ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[90%] mx-auto">
                        {projects.map((project) => (
                            <div
                                key={project.title}
                                className="bg-card border card-border rounded-xl overflow-hidden shadow-lg flex flex-col"
                            >
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="h-full w-full"
                                />
                                <div className="p-6 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-2 text-accent text-center">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-text/80 font-medium">
                                            {project.stack}
                                        </p>
                                    </div>

                                    <div className="flex gap-4 mt-4">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center font-medium bg-accent border-accent rounded-md py-2 hover:bg-accent-hover transition-colors cursor-pointer"
                                        >
                                            Visit
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center font-medium border border-white rounded-md py-2 hover:bg-accent/70 hover:border-accent/70 transition-colors cursor-pointer"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
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
