// components/Projects.js
const Projects = () => {
    const projects = [
        {
            title: 'Health Appointment Scheduler',
            description: 'A web application that allows patients to schedule appointments with healthcare providers efficiently. Built with Node.js, Express, and MongoDB.',
            imageUrl: '/images/health-appointment-scheduler.png',
            demoUrl: 'https://your-live-demo-url.com',
            repoUrl: 'https://github.com/DipPandey/Health-Appointment-Scheduler',
            techStack: [
                { name: 'Node.js', icon: 'https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white' },
                { name: 'Express', icon: 'https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white' },
                { name: 'MongoDB', icon: 'https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white' },
                { name: 'React', icon: 'https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB' },
                { name: 'VS Code', icon: 'https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white' },
                { name: 'GitHub', icon: 'https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white' },
                { name: 'Vercel', icon: 'https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white' }
            ]
        },
        {
            title: 'Portfolio Website',
            description: 'A personal portfolio website built with Next.js and Nextra to showcase my projects and skills.',
            imageUrl: '/images/portfolio-website.png',
            demoUrl: 'https://your-live-demo-url.com',
            repoUrl: 'https://github.com/DipPandey/portfolio-website',
            techStack: [
                { name: 'Next.js', icon: 'https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white' },
                { name: 'Nextra', icon: 'https://img.shields.io/badge/Nextra-000000?style=flat-square&logo=nextra&logoColor=white' },
                { name: 'Tailwind CSS', icon: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white' }
            ]
        }
    ];

    return (
        <section id="projects" className="hover-shadow wobble-background py-10 lg:py-10 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-blue-200 text-center">Personal Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-600 bg-opacity-50 p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
                            <img src={project.imageUrl} alt={project.title} className="rounded-lg mb-4" />
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="mb-4">
                                <h4 className="text-xl font-bold text-blue-300">Tech Stack Used:</h4>
                                <div className="flex space-x-2 mt-2">
                                    {project.techStack.map((tech, idx) => (
                                        <img key={idx} src={tech.icon} alt={tech.name} title={tech.name} className="h-8 w-8" />
                                    ))}
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <a href={project.demoUrl} className="text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                <a href={project.repoUrl} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
