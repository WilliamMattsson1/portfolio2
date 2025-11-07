const navLinks = [
    {
        name: 'Work',
        link: '#hero'
    },
    {
        name: 'Projects',
        link: '#projects'
    },
    {
        name: 'Skills',
        link: '#skills'
    }
]

const roles = [
    { text: 'Frontend Dev' },
    { text: 'Web Designer' },
    { text: 'QA Tester' }
]

const features = [
    {
        iconPath: '/icons/featureCard1.png',
        title: 'Teamwork',
        text: `
            Jag trivs i agila team och har erfarenhet av Scrum och sprintarbete på Safello. Kommunikation är alltid i fokus.
        `
    },
    {
        iconPath: '/icons/featureCard2.png',
        title: 'Kvalitet',
        text: `
                Med bakgrund inom QA testar jag noggrant och tänker på kvalitet redan under planering. Jag bygger hellre rätt från början.
            `
    },
    {
        iconPath: '/icons/featureCard3.png',
        title: 'Kreativitet',
        text: `
            Jag gillar att skapa snygga, användarvänliga gränssnitt och tänker alltid på detaljerna som gör upplevelsen bättre.
        `
    }
]

export { navLinks, roles, features }
