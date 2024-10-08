const Projects = () => {
    const projects = [
        {
            title: 'CourseStore',
            description: `An web application for selling courses, including features like video syllabus, user accounts, and payment integration using Stripe. The app allows users to browse courses, view details, and securely purchase them. It also includes a dynamic cart and order tracking system, built with modern web technologies.`,
            imageUrl: '/images/courseStore.png',  // Replace with the actual image URL
            demoUrl: 'https://learncourse-ai.netlify.app/',  // Replace with your live demo URL
            repoUrl: 'https://github.com/DipPandey/course-store',  // Replace with your GitHub repository URL
            techStack: [
                { name: 'React', icon: 'https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB' },
                { name: 'Next.js', icon: 'https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white' },
                { name: 'MongoDB', icon: 'https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white' },
                { name: 'Tailwind CSS', icon: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white' },
                { name: 'Stripe', icon: 'https://img.shields.io/badge/Stripe-008CDD?style=flat-square&logo=stripe&logoColor=white' }
            ]
        },

        {
            title: 'Health Appointment Scheduler',
            description: 'A web application that allows patients to schedule appointments with healthcare providers efficiently. Built with Node.js, Express, and MongoDB.',
            imageUrl: '/images/HAS.png',
            demoUrl: 'https://your-live-demo-url.com',
            repoUrl: 'https://github.com/DipPandey/Helalth-Appointment-Scheduler',
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
            title: 'Next.js Portfolio Website',
            description: 'A personal portfolio website built with Next.js and Nextra to showcase my projects and skills.',
            imageUrl: '/images/Dip page.png',
            demoUrl: 'https://dip-portfolio-website.vercel.app/',
            repoUrl: 'https://github.com/DipPandey/Dip-Portfolio-website',
            techStack: [
                { name: 'Next.js', icon: 'https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white' },
                { name: 'Nextra', icon: 'https://img.shields.io/badge/Nextra-000000?style=flat-square&logo=nextra&logoColor=white' },
                { name: 'Tailwind CSS', icon: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white' },
                { name: 'React Native', icon: 'https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB' }
            ]
        },
        {
            title: 'Road Network Shortest Path',
            description: 'A project comparing the performance of Dijkstra\'s and A* algorithms for finding the shortest path in a road network.',
            imageUrl: '/images/road-network-shortest-path.png',
            demoUrl: 'https://your-live-demo-url.com',
            repoUrl: 'https://github.com/DipPandey/RoadNetworkShortestPath',
            techStack: [
                { name: 'Python', icon: 'https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white' },
                { name: 'NetworkX', icon: 'https://img.shields.io/badge/NetworkX-000000?style=flat-square&logo=networkx&logoColor=white' },
                { name: 'Matplotlib', icon: 'https://img.shields.io/badge/Matplotlib-000000?style=flat-square&logo=matplotlib&logoColor=white' }
            ]
        },
        {
            title: 'AI-Powered Quiz Buddy',
            description: 'An AI-powered web application that generates quizzes based on user input and provides explanations on various topics.',
            imageUrl: '/images/aiQuiz.png',
            demoUrl: 'https://reliable-bunny-3ac1f8.netlify.app/',
            repoUrl: 'https://github.com/DipPandey/my-study-buddy',
            techStack: [
                { name: 'Next.js', icon: 'https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white' },
                { name: 'Tailwind CSS', icon: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white' },
                { name: 'Node.js', icon: 'https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white' },
                { name: 'Express', icon: 'https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white' },
                { name: 'MongoDB', icon: 'https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white' },
                { name: 'OpenAI', icon: 'https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white' }
            ]
        },
        {
            title: 'Stock Manager',
            description: 'A  stock management application I made for a local Tilling business that tracks inventory, orders, and shipments with a user-friendly interface.',
            imageUrl: '/images/stock.png',
            demoUrl: 'https://dipstockmanager.netlify.app',
            repoUrl: 'https://github.com/DipPandey/Stock-managment-project',
            techStack: [
                { name: 'Next.js', icon: 'https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white' },
                { name: 'MongoDB', icon: 'https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white' },
                { name: 'Tailwind CSS', icon: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white' },
                { name: 'Node.js', icon: 'https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white' },
                { name: 'Express', icon: 'https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white' }
            ]
        },
        {
            title: 'Secure Login & Permissions Web App',
            description: `A full-stack web application built on an Azure Virtual Machine using Ubuntu, PHP, and MySQL. This project demonstrates secure user authentication, role-based permissions, and OAuth integration. The app features a registration and login system with password hashing, session management, and secure API communication. It includes an admin panel for managing user roles, access logs, and a Discord account link page using OAuth.`,
            imageUrl: '/images/secure-login.png',  // Replace with the actual image URL
            demoUrl: 'https://your-azure-demo-url.com', // Replace with your demo URL
            repoUrl: 'https://github.com/DipPandey/Web-App-with-OAuth-and-Permissions-and-API-use-',
            techStack: [
                { name: 'PHP', icon: 'https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white' },
                { name: 'MySQL', icon: 'https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white' },
                { name: 'OAuth', icon: 'https://img.shields.io/badge/OAuth-0000FF?style=flat-square&logo=oauth&logoColor=white' },
                { name: 'Azure', icon: 'https://img.shields.io/badge/Azure-0089D6?style=flat-square&logo=microsoft-azure&logoColor=white' },
                { name: 'Ubuntu', icon: 'https://img.shields.io/badge/Ubuntu-E95420?style=flat-square&logo=ubuntu&logoColor=white' },
                { name: 'Guzzle', icon: 'https://img.shields.io/badge/Guzzle-000000?style=flat-square&logo=guzzle&logoColor=white' },
                { name: 'MVC', icon: 'https://img.shields.io/badge/MVC-007ACC?style=flat-square&logo=mvc&logoColor=white' }
            ]
        },

        {
            title: 'Applify Attraction',
            description: 'A fun chat app that helps men improve their texting game with women to build attraction and keep conversations fun and light.',
            imageUrl: '/images/applify-attraction.png',
            demoUrl: 'https://applifyattraction.netlify.app/',
            repoUrl: 'https://github.com/DipPandey/applify-attraction/tree/main',
            techStack: [
                { name: 'Next.js', icon: 'https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white' },
                { name: 'Tailwind CSS', icon: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white' },
                { name: 'MongoDB', icon: 'https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white' },
                { name: 'OpenAI', icon: 'https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white' },
                { name: 'Node.js', icon: 'https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white' }
            ]
        }
    ];

    return (
        <section id="projects" className="py-10 lg:py-10 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-10 text-blue-200 text-center">Personal Projects</h2>
                <div className="flex flex-col gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-800 bg-opacity-50 p-6 shadow-lg rounded-lg transform transition-transform duration-200 hover:scale-95 hover:shadow-xl hover:shadow-blue-100">
                            <div className="flex items-center gap-4">
                                <img src={project.imageUrl} alt={project.title} className="w-24 h-24 object-cover rounded-md" />
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                    <div className="mb-4">
                                        <h4 className="text-xl font-bold text-blue-300">Tech Stack Used:</h4>
                                        <div className="flex flex-wrap gap-2 mt-2">
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
