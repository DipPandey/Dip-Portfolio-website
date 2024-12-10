// components/Skills.js
import useVisibility from './useVisibility';

const skills = {
    'Programming Languages': [
        { name: 'JavaScript (ES2015+)', icon: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black' },
        { name: 'TypeScript', icon: 'https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white' },
        { name: 'HTML', icon: 'https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white' },
        { name: 'CSS', icon: 'https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white' },
        { name: 'Python', icon: 'https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white' },
        { name: 'C', icon: 'https://img.shields.io/badge/C-A8B9CC?style=flat-square&logo=c&logoColor=white' },
        { name: 'C++', icon: 'https://img.shields.io/badge/C++-00599C?style=flat-square&logo=c%2B%2B&logoColor=white' },
        { name: 'PHP', icon: 'https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white' }
    ],
    'Libraries & Frameworks': [
        { name: 'React', icon: 'https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB' },
        { name: 'Next.js', icon: 'https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white' },
        { name: 'Node.js', icon: 'https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white' },
        { name: 'Django', icon: 'https://img.shields.io/badge/Django-092E20?style=flat-square&logo=django&logoColor=white' },
        { name: 'Laravel', icon: 'https://img.shields.io/badge/Laravel-FF2D20?style=flat-square&logo=laravel&logoColor=white' },
        { name: 'Vue.js', icon: 'https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=vue-dot-js&logoColor=white' },
        { name: 'Angular', icon: 'https://img.shields.io/badge/Angular-DD0031?style=flat-square&logo=angular&logoColor=white' },
        { name: 'Flutter', icon: 'https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white' },
        { name: 'Tailwind CSS', icon: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white' },
        { name: 'GraphQL', icon: 'https://img.shields.io/badge/GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white' },
        { name: 'Redux', icon: 'https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=white' },
        { name: 'Framer Motion', icon: 'https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white' }
    ],
    'Backend & APIs': [
        { name: 'RESTful APIs', icon: 'https://img.shields.io/badge/REST_API-008000?style=flat-square&logo=api&logoColor=white' },
        { name: 'GraphQL APIs', icon: 'https://img.shields.io/badge/GraphQL-FF4081?style=flat-square&logo=graphql&logoColor=white' },
        { name: 'JWT Authentication', icon: 'https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white' },
        { name: 'OAuth', icon: 'https://img.shields.io/badge/OAuth-0000FF?style=flat-square&logo=oauth&logoColor=white' },
        { name: 'SQL/NoSQL Databases', icon: 'https://img.shields.io/badge/SQL/NoSQL-4CAF50?style=flat-square&logo=database&logoColor=white' },
        { name: 'CI/CD Pipelines', icon: 'https://img.shields.io/badge/CI/CD-00A2E8?style=flat-square&logo=continuousintegration&logoColor=white' }
    ],
    'Fundamentals & Testing': [
        { name: 'Data Structures & Algorithms', icon: 'https://img.shields.io/badge/DSA-3A539B?style=flat-square&logo=algorithms&logoColor=white' },
        { name: 'Version Control (Git)', icon: 'https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white' },
        { name: 'Testing (Jest, Mocha)', icon: 'https://img.shields.io/badge/Testing-20232A?style=flat-square&logo=jest&logoColor=white' },
        { name: 'Basic Security', icon: 'https://img.shields.io/badge/Security-A52A2A?style=flat-square&logo=security&logoColor=white' }
    ],
    'Cloud & DevOps Basics': [
        { name: 'AWS (EC2, S3)', icon: 'https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white' },
        { name: 'Netlify', icon: 'https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white' },
        { name: 'Vercel', icon: 'https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white' },
        { name: 'Heroku', icon: 'https://img.shields.io/badge/Heroku-430098?style=flat-square&logo=heroku&logoColor=white' },
        { name: 'Docker', icon: 'https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white' }
    ],
    'Collaboration & Communication': [
        { name: 'GitHub', icon: 'https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white' },
        { name: 'Jira', icon: 'https://img.shields.io/badge/Jira-0052CC?style=flat-square&logo=jira&logoColor=white' },
        { name: 'Slack', icon: 'https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=slack&logoColor=white' },
        { name: 'Figma', icon: 'https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white' },
        { name: 'Agile/Scrum', icon: 'https://img.shields.io/badge/Agile/Scrum-006400?style=flat-square&logo=agile&logoColor=white' }
    ],
    'Soft Skills': [
        { name: 'Team Collaboration', icon: 'https://img.shields.io/badge/Team_Collaboration-FFD700?style=flat-square&logo=teams&logoColor=black' },
        { name: 'Communication', icon: 'https://img.shields.io/badge/Communication-008000?style=flat-square&logo=communication&logoColor=white' },
        { name: 'Problem Solving', icon: 'https://img.shields.io/badge/Problem_Solving-FF4500?style=flat-square&logo=problem-solving&logoColor=white' },
        { name: 'Time Management', icon: 'https://img.shields.io/badge/Time_Management-1E90FF?style=flat-square&logo=time-management&logoColor=white' },
        { name: 'Adaptability', icon: 'https://img.shields.io/badge/Adaptability-32CD32?style=flat-square&logo=adaptability&logoColor=white' },
        { name: 'Leadership', icon: 'https://img.shields.io/badge/Leadership-DC143C?style=flat-square&logo=leadership&logoColor=white' },
        { name: 'Creativity', icon: 'https://img.shields.io/badge/Creativity-FFD700?style=flat-square&logo=creativity&logoColor=black' },
        { name: 'Continuous Learning', icon: 'https://img.shields.io/badge/Learning-FFD700?style=flat-square&logo=leanpub&logoColor=black' }
    ]
};

const Skills = () => {
    const ref = useVisibility();

    return (
        <section
            id="skills"
            ref={ref}
            className="animated opacity-0 py-10 lg:py-14 relative overflow-hidden text-blue-100"
        >
            {/* Animated gradient background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#1a1f2f] via-[#151929] to-[#0f141f] animate-gradient-flow"></div>

            <div className="container mx-auto px-4">
                <h2 className="text-center text-4xl font-extrabold mb-12 uppercase tracking-wider">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-purple-400 drop-shadow-md">
                        Skills
                    </span>
                </h2>
                <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10 text-sm leading-relaxed">
                    As an aspiring software engineer, I focus on combining a strong foundation in programming, CS fundamentals, and modern web technologies with the soft skills and collaboration tools needed to thrive in dynamic team environments. Below is a snapshot of my diverse skill set.
                </p>

                <div className="space-y-8">
                    {Object.keys(skills).map((category, index) => (
                        <div
                            key={index}
                            className="bg-black/30 backdrop-blur-md p-6 rounded-lg shadow-xl border border-white/10 transition-all duration-500 hover:shadow-blue-500/20"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-blue-200 uppercase tracking-wider relative">
                                {category}
                                <span className="absolute -bottom-1 left-0 w-1/3 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></span>
                            </h3>
                            <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 hover:scrollbar-thumb-blue-500 transition-colors duration-300">
                                {skills[category].map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="
                                            bg-[#1f2b3a] p-2 shadow-md rounded-md min-w-max 
                                            transform transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/30 hover:bg-[#223043]
                                            border border-transparent hover:border-blue-500/50
                                        "
                                    >
                                        <img src={skill.icon} alt={skill.name} className="w-6 h-6 mb-1 inline-block" />
                                        <p className="text-gray-300 inline-block text-sm font-semibold whitespace-nowrap">{skill.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes gradientFlow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient-flow {
                    background-size: 400% 400%;
                    animation: gradientFlow 15s ease infinite;
                }
            `}</style>
        </section>
    );
};

export default Skills;
