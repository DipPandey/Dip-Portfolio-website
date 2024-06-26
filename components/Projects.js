// components/Projects.js
const Projects = () => {
    const projects = [
        {
            title: 'Health Appointment Scheduler',
            description: 'A web application that allows patients to schedule appointments with healthcare providers efficiently. Built with Node.js, Express, and MongoDB.',
            imageUrl: '/images/health-appointment-scheduler.png',
            demoUrl: 'https://your-live-demo-url.com',
            repoUrl: 'https://github.com/DipPandey/Health-Appointment-Scheduler',
        },
        {
            title: 'Portfolio Website',
            description: 'A personal portfolio website built with Next.js and Nextra to showcase my projects and skills.',
            imageUrl: '/images/portfolio-website.png',
            demoUrl: 'https://your-live-demo-url.com',
            repoUrl: 'https://github.com/DipPandey/portfolio-website',
        },
    ];

    return (
        <section id="projects" className="hover-shadow wobble-background py-20 lg:py-40 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center">Personal Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-800 bg-opacity-80 p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
                            <img src={project.imageUrl} alt={project.title} className="rounded-lg mb-4" />
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="flex space-x-4">
                                <a href={project.demoUrl} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Live Demo</a>
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
