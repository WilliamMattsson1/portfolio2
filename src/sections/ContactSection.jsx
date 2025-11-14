import SectionHeader from '../components/SectionHeader'
import { contactLinks } from '../constants'

const ContactSection = () => {
    return (
        <section id="contact" className="mx-auto mt-30 max-w-[90%]">
            <SectionHeader
                title="Contact Me"
                highlightWord="Contact"
                sub="Feel free to reach out for projects"
            />

            <p className="text-text-secondary bg-card p-3 md:p-8 text-center max-w-2xl mx-auto mt-8 rounded-xl card-border">
                Are you in search of a talented frontend developer to bring your
                ideas to life? Look no further! I'm William, and I specialize in
                crafting engaging and user-friendly web applications.
            </p>

            <div className="flex justify-center gap-3 md:gap-6 bg-card card-border max-w-fit mx-auto rounded-xl p-4 md:p-6 mt-10">
                {contactLinks.map((contact) => {
                    const Icon = contact.icon
                    return (
                        <a
                            key={contact.name}
                            href={contact.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 border border-accent px-6 py-4 rounded-lg shadow-md hover:shadow-xl hover:ring-1 hover:ring-accent transition-all duration-300"
                        >
                            <Icon size={28} className="text-accent" />
                            <span className="text-text font-medium">
                                {contact.name}
                            </span>
                        </a>
                    )
                })}
            </div>

            <div className="w-58 h-1 bg-accent rounded-full mx-auto mt-8 mb-8"></div>
        </section>
    )
}

export default ContactSection
