const Projects = () => {
    const projects = [
        {
            title: 'CourseStore',
            description: "A web application for selling courses, including features like a video syllabus, user accounts, and Stripe payment integration. Users can browse courses, view details, and securely purchase them. It also includes a dynamic cart and order tracking system, built with modern web technologies.",
            imageUrl: '/images/courseStore.png',
            demoUrl: 'https://learncourse-ai.netlify.app/',
            repoUrl: 'https://github.com/DipPandey/course-store',
            techStack: [
                { name: 'React', icon: 'https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB' },
                { name: 'Next.js', icon: 'https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white' },
                { name: 'MongoDB', icon: 'https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white' },
                { name: 'Tailwind CSS', icon: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white' },
                { name: 'Stripe', icon: 'https://img.shields.io/badge/Stripe-008CDD?style=flat-square&logo=stripe&logoColor=white' }
            ]
        },
        {
            title: 'Stock Manager',
            description: 'A stock management application built for a local Tilling business, tracking inventory, orders, and shipments with a user-friendly interface.',
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
            "title": "The iiirds Studioz",
            "description": "A professional website for a web and video editing company, showcasing services, projects, and client engagement features.",
            "imageUrl": "/images/theiiird.png",
            "demoUrl": "https://theiiirdsstuidioz.netlify.app/",
            "repoUrl": "https://github.com/DipPandey/theiiirds-studioz",
            "techStack": [
                { "name": "React.js", "icon": "https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white" },
                { "name": "Next.js", "icon": "https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" },
                { "name": "Tailwind CSS", "icon": "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" },
                { "name": "Node.js", "icon": "https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" },
                { "name": "Express", "icon": "https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white" },
                { "name": "MongoDB", "icon": "https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" }
            ]
        }

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
            "title": "YRN Real Estate Website",
            "description": "A modern, visually appealing, and highly interactive real estate website built using Next.js, Tailwind CSS, and GSAP. The website features parallax animations, smooth scrolling effects, and responsive design. It includes sections like Home, About Us, Projects, Contact, and Why Choose Us, all crafted with dynamic transitions and stunning UI.",
            "imageUrl": "/images/yrn.png",
            "demoUrl": "https://yrnrealstate.netlify.app/#home",
            "repoUrl": "https://github.com/YourRepo/YRN-Real-Estate",
            "techStack": [
                { "name": "Next.js", "icon": "https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" },
                { "name": "React", "icon": "https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" },
                { "name": "Tailwind CSS", "icon": "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" },
                { "name": "GSAP", "icon": "https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=white" },
                { "name": "Netlify", "icon": "https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white" }
            ]
        },

        {
            title: 'Road Network Shortest Path',
            description: 'A project comparing the performance of Dijkstras and A* algorithms for finding the shortest path in a road network.',
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
            title: 'Secure Login & Permissions Web App',
            description: "A full-stack web application built on an Azure Virtual Machine using Ubuntu, PHP, and MySQL. This project demonstrates secure user authentication, role-based permissions, and OAuth integration. The app features a registration and login system with password hashing, session management, and secure API communication. It includes an admin panel for managing user roles, access logs, and a Discord account link page using OAuth.",
            imageUrl: '/images/secure-login.png',
            demoUrl: 'https://your-azure-demo-url.com',
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
            imageUrl: '/images/applify.png',
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
        <section id="projects" className="py-10 lg:py-20 text-white relative overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black animate-gradient-flow"></div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none z-[-1] overflow-hidden">
                <div className="absolute w-2 h-2 bg-blue-400 rounded-full top-1/4 left-1/3 blur-sm animate-float"></div>
                <div className="absolute w-3 h-3 bg-pink-400 rounded-full top-1/2 left-2/3 blur-sm animate-float-slow"></div>
                <div className="absolute w-1.5 h-1.5 bg-green-300 rounded-full top-1/3 right-1/4 blur-sm animate-float-fast"></div>
            </div>

            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-extrabold mb-12 text-center uppercase tracking-widest relative">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-purple-400 drop-shadow-lg">
                        Personal Projects
                    </span>
                    <span className="block h-1 w-16 bg-gradient-to-r from-pink-300 via-blue-300 to-purple-300 mx-auto mt-4 rounded-full animate-pulse"></span>
                </h2>
                <div className="flex flex-col gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="
                                relative bg-white/5 backdrop-blur-md p-6 shadow-xl rounded-lg overflow-hidden transform 
                                transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-500/30 group
                            "
                        >
                            {/* Glow behind card on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/10 to-purple-500/10 blur-2xl"></div>
                            </div>

                            <div className="flex flex-col md:flex-row items-start gap-6">
                                <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-36 h-36 object-cover rounded-md border border-blue-300 shadow-md"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3 text-blue-100 uppercase tracking-wide group-hover:text-blue-200 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="text-xl font-bold text-blue-300 mb-2 uppercase tracking-wide">Tech Stack Used:</h4>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {project.techStack.map((tech, idx) => (
                                                <img
                                                    key={idx}
                                                    src={tech.icon}
                                                    alt={tech.name}
                                                    title={tech.name}
                                                    className="h-8 w-8 transform hover:scale-110 transition-transform duration-200"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex space-x-6">
                                        <a
                                            href={project.demoUrl}
                                            className="text-blue-300 hover:text-blue-400 transition-colors duration-200 font-semibold"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.repoUrl}
                                            className="text-pink-300 hover:text-pink-400 transition-colors duration-200 font-semibold"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            GitHub Repo
                                        </a>
                                    </div>
                                </div>
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
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float { animation: float 4s ease-in-out infinite; }
                .animate-float-slow { animation: float 6s ease-in-out infinite; }
                .animate-float-fast { animation: float 3s ease-in-out infinite; }
            `}</style>
        </section>
    );
};

export default Projects;
