// components/Skills.js
import useVisibility from './useVisibility';

const skills = {
    'Programming Languages': [
        { name: 'JavaScript (ES2015+)', icon: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black' },
        { name: 'TypeScript', icon: 'https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white' },
        { name: 'HTML', icon: 'https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white' },
        { name: 'CSS', icon: 'https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white' },
        { name: 'PHP', icon: 'https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white' },
        { name: 'GraphQL', icon: 'https://img.shields.io/badge/GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white' },
        { name: 'C', icon: 'https://img.shields.io/badge/C-A8B9CC?style=flat-square&logo=c&logoColor=white' },
        { name: 'C++', icon: 'https://img.shields.io/badge/C++-00599C?style=flat-square&logo=c%2B%2B&logoColor=white' },
        { name: 'Python', icon: 'https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white' }
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
        { name: 'Timber for WordPress', icon: 'https://img.shields.io/badge/Timber-000000?style=flat-square&logo=timber&logoColor=white' },
        // Newly Added Libraries
        { name: 'Redux', icon: 'https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=white' },
        { name: 'GraphQL', icon: 'https://img.shields.io/badge/GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white' },
        { name: 'Django', icon: 'https://img.shields.io/badge/Django-092E20?style=flat-square&logo=django&logoColor=white' },
        { name: 'Laravel', icon: 'https://img.shields.io/badge/Laravel-FF2D20?style=flat-square&logo=laravel&logoColor=white' },
        { name: 'Vue.js', icon: 'https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=vue-dot-js&logoColor=white' },
        { name: 'Angular', icon: 'https://img.shields.io/badge/Angular-DD0031?style=flat-square&logo=angular&logoColor=white' },
        { name: 'Flutter', icon: 'https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white' },
        { name: 'Bootstrap', icon: 'https://img.shields.io/badge/Bootstrap-563D7C?style=flat-square&logo=bootstrap&logoColor=white' }
    ],
    'Backend Skills': [
        { name: 'RESTful APIs', icon: 'https://img.shields.io/badge/REST_API-008000?style=flat-square&logo=api&logoColor=white' },
        { name: 'GraphQL APIs', icon: 'https://img.shields.io/badge/GraphQL-FF4081?style=flat-square&logo=graphql&logoColor=white' },
        { name: 'JWT Authentication', icon: 'https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white' },
        { name: 'OAuth', icon: 'https://img.shields.io/badge/OAuth-0000FF?style=flat-square&logo=oauth&logoColor=white' },
        { name: 'Database Schemas', icon: 'https://img.shields.io/badge/Database_Schemas-4E4E50?style=flat-square&logo=database&logoColor=white' },
        { name: 'SQL/NoSQL Databases', icon: 'https://img.shields.io/badge/SQL/NoSQL-4CAF50?style=flat-square&logo=database&logoColor=white' },
        { name: 'API Endpoint Management', icon: 'https://img.shields.io/badge/API_Management-3E6E00?style=flat-square&logo=api&logoColor=white' },
        { name: 'Version Control (Git)', icon: 'https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white' },
        { name: 'CI/CD Pipelines', icon: 'https://img.shields.io/badge/CI/CD-00A2E8?style=flat-square&logo=continuousintegration&logoColor=white' },
        { name: 'Serverless Architecture', icon: 'https://img.shields.io/badge/Serverless-FF6600?style=flat-square&logo=serverless&logoColor=white' },
        { name: 'Data Structures & Algorithms (DSA)', icon: 'https://img.shields.io/badge/DSA-3A539B?style=flat-square&logo=algorithms&logoColor=white' },
        { name: 'Express.js', icon: 'https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white' },
        { name: 'Server Handling', icon: 'https://img.shields.io/badge/Server_Handling-2E8B57?style=flat-square&logo=server&logoColor=white' }
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
    ],
    'Soft Skills': [
        { name: 'Team Collaboration', icon: 'https://img.shields.io/badge/Team_Collaboration-FFD700?style=flat-square&logo=teams&logoColor=black' },
        { name: 'Communication', icon: 'https://img.shields.io/badge/Communication-008000?style=flat-square&logo=communication&logoColor=white' },
        { name: 'Independent Problem Solving', icon: 'https://img.shields.io/badge/Problem_Solving-FF4500?style=flat-square&logo=problem-solving&logoColor=white' },
        { name: 'Time Management', icon: 'https://img.shields.io/badge/Time_Management-1E90FF?style=flat-square&logo=time-management&logoColor=white' },
        { name: 'Adaptability', icon: 'https://img.shields.io/badge/Adaptability-32CD32?style=flat-square&logo=adaptability&logoColor=white' },
        { name: 'Leadership', icon: 'https://img.shields.io/badge/Leadership-DC143C?style=flat-square&logo=leadership&logoColor=white' },
        { name: 'Creativity', icon: 'https://img.shields.io/badge/Creativity-FFD700?style=flat-square&logo=creativity&logoColor=black' },
        { name: 'Continious Learning', icon: 'https://img.shields.io/badge/Creativity-FFD700?style=flat-square&logo=creativity&logoColor=black' }
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
                            <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
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

