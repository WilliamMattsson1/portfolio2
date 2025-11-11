import { Code, Wrench } from 'lucide-react'

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
            I enjoy working in agile teams and have experience with Scrum and sprint planning at Safello. Communication is always key.
        `
    },
    {
        iconPath: '/icons/featureCard2.png',
        title: 'Quality',
        text: `
            With a background in QA, I test thoroughly and focus on quality from the start. I prefer building things right the first time.
        `
    },
    {
        iconPath: '/icons/featureCard3.png',
        title: 'Creativity',
        text: `
            I love designing clean, user-friendly interfaces and always focus on the small details that enhance the experience.
        `
    }
]

const showcaseTabs = [
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'tech', label: 'Tech Stack', icon: Wrench }
]

const projects = [
    {
        title: 'Williams Clothing',
        thumbnail: 'images/projectImages/williamsclothing-thumbnail.png',
        stack: [
            'Fullstack',
            'React',
            'TypeScript',
            'Node.js',
            'Express',
            'SQLite'
        ],
        githubUrl: 'https://github.com/WilliamMattsson1/ecom-fullstack',
        liveUrl: 'https://ecom-fullstack-pxw8.onrender.com/'
    },
    {
        title: 'Coincheck',
        thumbnail: '/images/projectImages/coin-check-thumbnail.png',
        stack: ['Vue.js', 'Vite', 'Bootstrap', 'API', 'Chart.js', 'SPA'],
        githubUrl: 'https://github.com/WilliamMattsson1/Labb1Vue',
        liveUrl: 'https://coincheck.netlify.app/'
    },
    {
        title: 'Coincompass',

        thumbnail: '/images/projectImages/coin-compass-thumbnail.png',
        stack: ['Vue.js', 'TypeScript', 'Group Project', 'Agile'],
        githubUrl: 'https://github.com/ITHS-Team8/CoinCompass',
        liveUrl: 'https://coincompass.netlify.app/'
    },
    {
        title: 'Williams Recipes',
        thumbnail: '/images/projectImages/williamsrecipes-thumbnail.png',
        stack: ['JavaScript', 'CSS', 'HTML', 'Dynamic', 'API', 'JSON Server'],
        githubUrl: 'https://github.com/WilliamMattsson1/williams-recipes',
        liveUrl: 'https://williamsrecipes.netlify.app/'
    }

    // Old projects
    /*  {
        title: 'Blackjack',
        thumbnail: '/images/projectImages/blackjack-crossPlattform.png',
        stack: ['JavaScript', 'CSS', 'HTML', 'Dynamic'],
        githubUrl: 'https://github.com/WilliamMattsson1/black-jack',
        liveUrl: 'https://beatdealer.netlify.app/'
    },
    {
        title: 'Work C',
        thumbnail: '/images/projectImages/workc-crossPlattform.png',
        stack: ['HTML', 'CSS', 'JavaScript', 'Design'],
        githubUrl: 'https://github.com/WilliamMattsson1/cwork-project',
        liveUrl: 'https://workc.netlify.app/'
    } */
]

export { navLinks, roles, features, showcaseTabs, projects }
