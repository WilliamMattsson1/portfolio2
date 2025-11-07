const navLinks = [
    {
        name: 'Work',
        link: '#work'
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
        title: 'Teamwork & Agilt samarbete',
        text: `
            Jag trivs i team där man delar idéer, testar snabbt och lär sig tillsammans.
            Under min tid på Safello arbetade jag i ett agilt utvecklingsteam,
            där jag lärde mig vikten av tydlig kommunikation, att ge och ta feedback,
            och att hela tiden iterera för att nå bästa resultat.
        `
    },
    {
        iconPath: '/icons/featureCard2.png',
        title: 'Kvalitet & Detaljfokus',
        text: `
                Som tidigare QA-testare har jag ett naturligt kvalitetstänk redan från första kodraden.
                Jag ser till att grunden är stabil, att funktioner testas noggrant och att användarupplevelsen
                håller hög standard, både i kod och design.`
    },
    {
        iconPath: '/icons/featureCard3.png',
        title: 'Kreativitet & Designkänsla',
        text: `
            Jag gillar att skapa användarvänliga och visuellt tilltalande gränssnitt.
            Med erfarenhet av webbdesign och Figma försöker jag alltid hitta balansen mellan
            funktion och estetik, och bygga lösningar som känns både snygga och intuitiva.
        `
    }
]

export { navLinks, roles, features }
