const ProjectCard = ({ project }) => {
    const formatStack = (stackArray) =>
        stackArray.map((tech, i) => (
            <span key={i}>
                {tech}
                {i < stackArray.length - 1 ? ' | ' : ''}
            </span>
        ))

    return (
        <div className="bg-card border card-border rounded-xl overflow-hidden shadow-lg flex flex-col min-w-[310px] transition-transform duration-300 ease-out hover:scale-102 hover:shadow-2xl">
            <img
                src={project.thumbnail}
                alt={project.title}
                className="h-full w-full max-h-90"
            />
            <div className="p-6 flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-semibold mb-2 text-center">
                        {project.title}
                    </h3>
                    <p className="text-md text-text/80 font-light text-center">
                        {formatStack(project.stack)}
                    </p>
                </div>
                <div className="flex gap-5 mt-4">
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center font-medium bg-accent border-accent rounded-md py-3 hover:bg-accent-hover transition-colors cursor-pointer"
                    >
                        Visit
                    </a>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center font-medium border border-white rounded-md py-3 hover:bg-accent/70 hover:border-accent/70 transition-colors cursor-pointer"
                    >
                        Github
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
