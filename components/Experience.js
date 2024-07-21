import { useEffect, useRef } from 'react';

const experiences = [
    {
        role: 'Backup Manager Software Developer',
        project: 'Omnicore Project',
        description: 'Developed a backup manager software as part of the Omnicore project at the University of Tasmania, ensuring data security and reliability for university systems. Implemented automated backup schedules using Python scripts and optimized storage using PostgreSQL. Designed a user-friendly interface with Django for seamless interaction. Collaborated with a cross-functional team to integrate AWS services for scalable and secure backup solutions. Conducted regular code reviews and implemented CI/CD pipelines for efficient deployment.',
        duration: 'Aug 2022 - May 2023',
        website: 'https://omnicore.com.au',
        skills: ['HTML', 'CSS', 'Python', 'PHP', 'Django', 'PostgreSQL', 'AWS'],
        image: '/images/omnicore.png'
    },
    {
        role: 'Web Maintenance',
        company: 'The Thirds',
        description: 'Maintained and updated the website for The Thirds, ensuring seamless user experience and optimal website performance. Implemented responsive design techniques using HTML and CSS to improve mobile usability. Developed custom JavaScript modules to enhance interactive features. Utilized Wix\'s development tools for integrating third-party APIs and managing dynamic content. Conducted regular performance audits and optimized loading times through efficient code practices and resource management.',
        duration: 'Mar 2021 - Present',
        website: 'https://dipburly.wixsite.com/the-thirds',
        skills: ['HTML', 'CSS', 'JavaScript', 'Wix'],
        image: '/images/thethird.png'
    },
    {
        role: 'Marketing Manager',
        company: 'Great White Plumbing',
        description: 'Managed marketing campaigns and strategies for Great White Plumbing, focusing on enhancing brand presence and customer engagement through digital channels. Developed SEO strategies to improve organic search rankings, resulting in a 25% increase in website traffic. Created and managed content marketing initiatives, including blog posts and social media updates, to engage the target audience. Utilized Google Analytics to track campaign performance and adjust strategies for optimal results. Coordinated with the design team to produce visually appealing promotional materials.',
        duration: 'Jan 2020 - Dec 2021',
        skills: ['SEO', 'Content Marketing', 'Social Media Management', 'Google Analytics'],
        image: '/images/plumbing.png'
    }
];

const freelanceProjects = [
    {
        role: 'Full-Stack Developer',
        project: 'Artist Portfolio for Mostafa Faraji',
        description: 'Developed a modern and visually engaging portfolio website for the artist Mostafa Faraji, showcasing his artwork and projects. Utilized React for building a dynamic and responsive user interface. Implemented server-side logic with Node.js and Express to manage portfolio content. Integrated MongoDB for flexible content management. Enhanced user experience with interactive features and animations using Framer Motion. Deployed the website on Vercel for optimal performance and scalability.',
        duration: 'Feb 2022 - Apr 2022',
        website: 'https://mostafafaraji.com.au',
        skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Framer Motion', 'Vercel'],
        image: '/images/mostafa.png'
    },
    {
        role: 'Front-End Developer',
        project: 'Portfolio Website',
        description: 'Created a personal portfolio website to showcase projects and skills, with an emphasis on responsive design and smooth animations. Utilized Next.js for server-side rendering and improved SEO. Styled the website with Tailwind CSS for a modern and consistent look. Implemented animations using Framer Motion to enhance user interaction. Integrated dynamic content loading to improve site performance. Deployed the website on Vercel for continuous deployment and scalability.',
        duration: 'Sep 2021 - Oct 2021',
        website: 'https://dip-portfolio-website.vercel.app/',
        skills: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        image: '/images/Dip page.png'
    },
    {
        role: 'Full-Stack Developer',
        project: 'E-commerce Platform',
        description: 'Developed a full-fledged e-commerce platform for a local business, integrating payment gateways and user authentication. Built the front-end with React for a dynamic user interface and the back-end with Node.js and Express for robust server-side logic. Implemented MongoDB for data storage and management. Integrated Stripe API for secure payment processing. Utilized JWT for secure user authentication and authorization. Conducted extensive testing to ensure a seamless shopping experience.',
        duration: 'Jun 2021 - Aug 2021',
        skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT'],
        image: '/images/omnicore-project.jpg'
    },
    {
        role: 'Back-End Developer',
        project: 'API for Web Application',
        description: 'Developed a robust and scalable RESTful API for a mobile application, including user management and real-time data processing. Built with Node.js and Express to handle server-side logic. Implemented MongoDB for flexible and scalable data storage. Utilized Socket.io for real-time communication between the server and mobile clients. Ensured secure data transmission with JWT authentication. Conducted load testing to ensure the API could handle high traffic volumes.',
        duration: 'Nov 2021 - Dec 2021',
        skills: ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
        image: '/images/HAS.png'
    }
];

const useVisibility = () => {
    const ref = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(ref.current);
    }, []);
    return ref;
};

const Experience = () => {
    const ref = useVisibility();
    return (
        <section id="experience" ref={ref} className="animated opacity-0 h-screen overflow-y-auto">
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold mb-5 text-blue-300 text-center">Experience</h2>
                <div className="flex flex-col gap-6">
                    {experiences.map((exp, index) => (
                        <a
                            key={index}
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transform transition-transform duration-300 hover:scale-102"
                        >
                            <div className="bg-gray-800 bg-opacity-80 p-2 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-95 hover:shadow-xl hover:shadow-gray-300">
                                <div className="flex items-center gap-4">
                                    <img src={exp.image} alt={exp.project} className="w-24 h-24 object-cover rounded-md" />
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 text-white">{exp.role} at {exp.company || exp.project}</h3>
                                        <p className="text-gray-300 mb-2">{exp.description}</p>
                                        <p className="text-gray-500 mb-4">{exp.duration}</p>
                                        {exp.skills && (
                                            <div className="mt-4">
                                                <h4 className="text-xl font-bold text-blue-300">Skills Utilized:</h4>
                                                <p className="text-gray-300">{exp.skills.join(', ')}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                <h2 className="text-3xl font-bold mb-8 text-blue-200 text-center mt-8">Freelance Projects</h2>
                <div className="flex flex-col gap-6">
                    {freelanceProjects.map((project, index) => (
                        <a
                            key={index}
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transform transition-transform duration-300 hover:scale-102"
                        >
                            <div className="bg-gray-800 bg-opacity-80 p-2 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-95 hover:shadow-xl hover:shadow-blue-300">
                                <div className="flex items-center gap-4">
                                    <img src={project.image} alt={project.project} className="w-24 h-24 object-cover rounded-md" />
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2 text-white">{project.role} - {project.project}</h3>
                                        <p className="text-gray-300 mb-2">{project.description}</p>
                                        <p className="text-gray-500 mb-4">{project.duration}</p>
                                        {project.skills && (
                                            <div className="mt-4">
                                                <h4 className="text-xl font-bold text-blue-300">Skills Utilized:</h4>
                                                <p className="text-gray-300">{project.skills.join(', ')}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
