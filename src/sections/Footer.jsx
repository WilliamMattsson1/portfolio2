const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="bg-card text-center py-6 text-sm font-medium">
            © {year} William Mattsson. All rights reserved.
        </footer>
    )
}

export default Footer
