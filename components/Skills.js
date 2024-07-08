// components/Skills.js
import useVisibility from './useVisibility';

const skills = {
    'Programming Languages': [
        { name: 'JavaScript (ES2015+)', icon: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black' },
        { name: 'TypeScript', icon: 'https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white' },
        { name: 'HTML', icon: 'https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white' },
        { name: 'CSS', icon: 'https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white' },
        { name: 'Sass', icon: 'https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white' },
        { name: 'PHP', icon: 'https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white' },
        { name: 'GraphQL', icon: 'https://img.shields.io/badge/GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white' },
        { name: 'C', icon: 'https://img.shields.io/badge/C-A8B9CC?style=flat-square&logo=c&logoColor=white' },
        { name: 'C++', icon: 'https://img.shields.io/badge/C++-00599C?style=flat-square&logo=c%2B%2B&logoColor=white' }
    ],
    'Libraries & Frameworks': [
        { name: 'React', icon: 'https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB' },
        { name: 'Next.js', icon: 'https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white' },
        { name: 'Gatsby', icon: 'https://img.shields.io/badge/Gatsby-663399?style=flat-square&logo=gatsby&logoColor=white' },
        { name: 'Eleventy', icon: 'https://img.shields.io/badge/Eleventy-000000?style=flat-square&logo=eleventy&logoColor=white' },
        { name: 'Node.js', icon: 'https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white' },
        { name: 'MongoDB', icon: 'https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white' },
        { name: 'React Native', icon: 'https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB' },
        { name: 'Tailwind CSS', icon: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white' },
        { name: 'Styled Components', icon: 'https://img.shields.io/badge/Styled_Components-DB7093?style=flat-square&logo=styled-components&logoColor=white' },
        { name: 'Framer Motion', icon: 'https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white' },
        { name: 'Anime.js', icon: 'https://img.shields.io/badge/Anime.js-000000?style=flat-square&logo=anime.js&logoColor=white' },
        { name: 'Timber for WordPress', icon: 'https://img.shields.io/badge/Timber-000000?style=flat-square&logo=timber&logoColor=white' }
    ],
    'Tools & Platforms': [
        { name: 'Visual Studio', icon: 'https://img.shields.io/badge/Visual_Studio-5C2D91?style=flat-square&logo=visual%20studio&logoColor=white' },
        { name: 'Git', icon: 'https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white' },
        { name: 'GitHub', icon: 'https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white' },
        { name: 'Netlify', icon: 'https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white' },
        { name: 'Vercel', icon: 'https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white' },
        { name: 'Heroku', icon: 'https://img.shields.io/badge/Heroku-430098?style=flat-square&logo=heroku&logoColor=white' },
        { name: 'WordPress', icon: 'https://img.shields.io/badge/WordPress-21759B?style=flat-square&logo=wordpress&logoColor=white' },
        { name: 'Contentful', icon: 'https://img.shields.io/badge/Contentful-2478CC?style=flat-square&logo=contentful&logoColor=white' },
        { name: 'Algolia', icon: 'https://img.shields.io/badge/Algolia-5468FF?style=flat-square&logo=algolia&logoColor=white' },
        { name: 'Firebase', icon: 'https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black' },
        { name: 'Storybook', icon: 'https://img.shields.io/badge/Storybook-FF4785?style=flat-square&logo=storybook&logoColor=white' },
        { name: 'Docker', icon: 'https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white' },
        { name: 'Webpack', icon: 'https://img.shields.io/badge/Webpack-8DD6F9?style=flat-square&logo=webpack&logoColor=black' },
        { name: 'Figma', icon: 'https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white' }
    ]
};

const Skills = () => {
    const ref = useVisibility();

    return (
        <section id="skills" ref={ref} className="animated opacity-0 py-6 lg:py-6 bg-gray-900 text-blue-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-blue-200 text-center">Skills</h2>
                <div className="space-y-6">
                    {Object.keys(skills).map((category, index) => (
                        <div key={index} className="bg-gray-800 bg-opacity-80 p-4 shadow-lg rounded-lg">
                            <h3 className="text-xl font-bold mb-2 text-blue-200">{category}</h3>
                            <div className="flex space-x-2 overflow-x-auto pb-2">
                                {skills[category].map((skill, skillIndex) => (
                                    <div key={skillIndex} className="bg-gray-700 bg-opacity-80 p-2 shadow-md rounded-md min-w-max transform transition-transform duration-200 hover:scale-105">
                                        <img src={skill.icon} alt={skill.name} className="w-6 h-6 mb-1 inline-block" />
                                        <p className="text-gray-300 inline-block text-sm">{skill.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
