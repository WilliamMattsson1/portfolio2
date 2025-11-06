import { navLinks } from '../constants'

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="inner-wrapper">
                <a href="#hero" className="logo">
                    WILLIAM MA
                </a>

                <nav className="desktop-nav">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href="#contact" className="contact-btn group">
                    <div className="btn-container">
                        <span>Contact</span>
                    </div>
                </a>
            </div>
        </header>
    )
}

export default Navbar
