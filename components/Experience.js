import { useEffect, useRef } from 'react';

const experiences = [
    {
        role: 'Backup Manager Software Developer',
        project: 'Omnicore Project',
        description: 'Developed a backup manager software as part of the Omnicore project at the University of Tasmania, ensuring data security and reliability for university systems.',
        duration: 'Aug 2022 - May 2023',
        website: 'https://omnicore.com.au',
        skills: ['HTML', 'CSS', 'Python', 'PHP', 'Django', 'PostgreSQL', 'AWS']
    },
    {
        role: 'Web Maintenance',
        company: 'The Thirds',
        description: 'Maintained and updated the website for The Thirds, ensuring seamless user experience and optimal website performance.',
        duration: 'Mar 2021 - Present',
        website: 'https://dipburly.wixsite.com/the-thirds',
        skills: ['HTML', 'CSS', 'JavaScript', 'Wix']
    },
    {
        role: 'Marketing Manager',
        company: 'Great White Plumbing',
        description: 'Managed marketing campaigns and strategies for Great White Plumbing, focusing on enhancing brand presence and customer engagement through digital channels.',
        duration: 'Jan 2020 - Dec 2021',
        skills: ['SEO', 'Content Marketing', 'Social Media Management', 'Google Analytics']
    }
];

const freelanceProjects = [
    {
        role: 'Full-Stack Developer',
        project: 'E-commerce Platform',
        description: 'Developed a full-fledged e-commerce platform for a local business, integrating payment gateways and user authentication.',
        duration: 'Jun 2021 - Aug 2021',
        skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT']
    },
    {
        role: 'Front-End Developer',
        project: 'Portfolio Website',
        description: 'Created a personal portfolio website to showcase projects and skills, with an emphasis on responsive design and smooth animations.',
        duration: 'Sep 2021 - Oct 2021',
        skills: ['Next.js', 'Tailwind CSS', 'Framer Motion']
    },
    {
        role: 'Back-End Developer',
        project: 'API for Mobile App',
        description: 'Developed a robust and scalable RESTful API for a mobile application, including user management and real-time data processing.',
        duration: 'Nov 2021 - Dec 2021',
        skills: ['Node.js', 'Express', 'MongoDB', 'Socket.io']
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
                <h2 className="text-3xl font-bold mb-5 text-blue-200 text-center">Experience</h2>
                <div className="flex flex-col gap-6">
                    {experiences.map((exp, index) => (
                        <a
                            key={index}
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transform transition-transform duration-300 hover:scale-102"
                        >
                            <div className="bg-gray-800 bg-opacity-80 p-2 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-95 hover:shadow-xl hover:shadow-gray-200">
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
                        </a>
                    ))}
                </div>
                <h2 className="text-3xl font-bold mb-8 text-blue-200 text-center mt-8">Freelance Projects</h2>
                <div className="flex flex-col gap-6">
                    {freelanceProjects.map((project, index) => (
                        <div key={index} className="bg-gray-800 bg-opacity-80 p-2 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-95 hover:shadow-xl hover:shadow-blue-200">
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
