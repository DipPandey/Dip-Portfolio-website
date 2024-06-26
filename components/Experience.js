import { useEffect, useRef } from 'react';

const experiences = [
    {
        role: 'Backup Manager Software Developer',
        project: 'Omnicore Project',
        description: 'Developed a backup manager software as part of the Omnicore project at the University of Tasmania, ensuring data security and reliability for university systems.',
        duration: 'Aug 2022 - May 2023',
        website: 'https://omnicore.com.au',
        skills: ['html','CSS','Python', 'PHP', 'Django', 'PostgreSQL', 'AWS']
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
        <section id="experience" ref={ref} className="animated opacity-0">
            <div className="container mx-auto px-1 py-4 lg:py-4">
                <h2 className="text-4xl font-bold mb-12 text-blue-200 text-center">Experience</h2>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-gray-800 bg-opacity-80 p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
                            <h3 className="text-2xl font-bold mb-2 text-blue-200">{exp.role} at {exp.company || exp.project}</h3>
                            <p className="text-gray-300 mb-2">{exp.description}</p>
                            <p className="text-gray-500 mb-4">{exp.duration}</p>
                            {exp.skills && (
                                <div className="mt-4">
                                    <h4 className="text-xl font-bold text-blue-300">Skills Utilized:</h4>
                                    <p className="text-gray-300">{exp.skills.join(', ')}</p>
                                </div>
                            )}
                            {exp.website && (
                                <a href={exp.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors duration-200 mt-4 block">
                                    Visit Website
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
