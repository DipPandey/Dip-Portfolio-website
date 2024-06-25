const experiences = [
    {
        role: 'Backup Manager Software Developer',
        project: 'Omnicore Project',
        description: 'Developed a backup manager software as part of the Omnicore project at the University of Tasmania, ensuring data security and reliability for university systems.',
        duration: 'Aug 2019 - May 2020',
    },
    {
        role: 'Web Maintenance',
        company: 'The Thirds',
        description: 'Maintained and updated the website for The Thirds, ensuring seamless user experience and optimal website performance.',
        duration: 'Mar 2021 - Present',
    },
    
    {
        role: 'Marketing Manager',
        company: 'Great White Plumbing',
        description: 'Managed marketing campaigns and strategies for Great White Plumbing, focusing on enhancing brand presence and customer engagement through digital channels.',
        duration: 'Jan 2020 - Dec 2021',
    }
    
];

const Experience = () => {
    return (
        <section id="experience" className="hover-shadow wobble-background">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-4">Experience</h2>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
                            <h3 className="text-xl font-bold mb-2">{exp.role} at {exp.company || exp.project}</h3>
                            <p className="text-gray-700 mb-2">{exp.description}</p>
                            <p className="text-gray-500">{exp.duration}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
