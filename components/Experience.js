// Experience.js
import React from 'react';

const experiences = [
    {
        role: 'Backup Manager Software Developer',
        project: 'Omnicore Project',
        description: 'Developed a front-end for a backup manager software at the University of Tasmania, integrated AWS, Python scripts, Django UI, and PostgreSQL optimization.',
        duration: '2018 — 2024',
        website: 'https://omnicore.com.au',
        skills: ['JavaScript', 'TypeScript', 'HTML & SCSS', 'React', 'Next.js', 'Django', 'Node.js', 'PostgreSQL', 'AWS', 'Deadline Mangement', 'Agile Cycle'],
        image: '/images/omnicore.png'
    },
    {
        role: 'Web Maintenance',
        company: 'The Thirds',
        description: 'Ensured a responsive and engaging user experience on The Thirds website. Integrated APIs, custom JS features, and improved overall performance.',
        duration: 'JULY — DEC 2017',
        website: 'https://dipburly.wixsite.com/the-thirds',
        skills: ['Wix', 'HTML', 'CSS', 'JavaScript', 'Updating client portfolio', 'Customizing site and SEOs'],
        image: '/images/thethird.png'
    },
    {
        role: 'Marketing Manager',
        company: 'Great White Plumbing',
        description: 'Enhanced brand visibility through SEO, content marketing, and social media strategies. Utilized Google Analytics for data-driven improvements.',
        duration: '2016 — 2017',
        website: 'https://australia.chamberofcommerce.com/business-directory/tasmania/new-town/plumber/4654782-great-white-plumbing#google_vignette',
        skills: ['SEO', 'Content Marketing', 'Social Media', 'Google Analytics', 'Website Management'],
        image: '/images/plumbing.png'
    }
];

const freelanceProjects = [
    {
        role: 'Full-Stack Developer',
        project: 'Artist Portfolio for Mostafa Faraji',
        description: 'Crafted a modern React/Node.js portfolio with MongoDB and Framer Motion animations, deployed on Vercel for a sleek user experience.',
        duration: 'FEB 2022 — APR 2022',
        website: 'https://mostafafaraji.com.au',
        skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Framer Motion', 'Vercel'],
        image: '/images/mostafa.png'
    },
    {
        role: 'Full-Stack Developer',
        project: 'E-commerce Platform',
        description: 'Developed a full-stack e-commerce site using React, Node.js, and Express. Integrated Stripe for payments and JWT for secure authentication.',
        duration: 'JUN 2021 — AUG 2021',
        skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT'],
        image: '/images/omnicore-project.jpg'
    },
    {
        role: 'Back-End Developer',
        project: 'API for Web Application',
        description: 'Built a scalable Node.js/Express API with MongoDB and Socket.io. Ensured secure endpoints with JWT and tested for high performance.',
        duration: 'NOV 2021 — DEC 2021',
        skills: ['Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
        image: '/images/HAS.png'
    },
    {
        role: 'Full-Stack Developer',
        project: 'Stock Management Software',
        description: 'Implemented a Next.js/Node.js inventory system with MongoDB, JWT, and OAuth. Focused on real-time updates and efficient scalability.',
        duration: 'JULY 2024 — AUG 2024',
        website: 'https://dipstockmanager.netlify.app/',
        skills: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'JWT', 'OAuth'],
        image: '/images/stock.png'
    }
];

const ExperienceItem = ({ item }) => {
    return (
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 mb-16">
            {/* Date Column */}
            <div className="md:w-1/4 md:text-right text-sm text-blue-200 font-medium mb-4 md:mb-0 uppercase tracking-wide">
                {item.duration}
            </div>

            {/* Content Card Container */}
            <div className="relative group transform-gpu">
                {/* Glow effect behind card, now more intense */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-[-1]" style={{
                    background: 'radial-gradient(circle at center, rgba(0,255,255,0.4) 0%, transparent 70%)',
                    filter: 'blur(30px)'
                }}></div>

                <a
                    href={item.website || '#'}
                    target={item.website ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="
                      md:w-3/4 bg-[#0f172a] border border-white/5 rounded-lg p-6 relative block 
                      shadow-lg transition-all duration-300 hover:scale-[1.03] hover:-rotate-1 hover:shadow-blue-500/50 overflow-hidden
                    "
                >
                    {/* Decorative moving highlight on hover */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-[-100%] h-full w-[100px] bg-gradient-to-r from-transparent via-white/10 to-transparent transform group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
                    </div>

                    <div className="flex items-start gap-3 mb-3">
                        {item.image && (
                            <img
                                src={item.image}
                                alt={item.project || item.company || item.role}
                                className="w-10 h-10 object-cover rounded-sm border border-blue-300 shadow-sm"
                            />
                        )}
                        <div>
                            <h3 className="text-lg font-bold text-blue-100 flex items-center gap-2 group-hover:text-blue-200 transition-colors duration-300">
                                {item.role}
                                {item.company ? ` · ${item.company}` : item.project ? ` · ${item.project}` : ''}
                                {item.website && (
                                    <span className="inline-block text-blue-300 text-sm translate-y-[-2px]">↗</span>
                                )}
                            </h3>
                        </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {item.description}
                    </p>

                    {/* Skill Chips with stronger glow and gradient on hover */}
                    {item.skills && item.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="
                                        px-2 py-1 text-xs font-semibold rounded-md bg-[#162238] text-blue-100 
                                        transition-all duration-200 transform-gpu
                                        hover:text-white hover:scale-105 
                                        hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 
                                        hover:shadow-[0_0_20px_4px_rgba(0,255,255,0.7)]
                                    "
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}
                </a>
            </div>
        </div>
    );
};

const Experience = () => {
    return (
        <>
            <section id="experience" className="min-h-screen py-16 text-white relative overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0a0f1f] via-[#0a1126] to-[#0e132c] animate-gradient-flow"></div>

                <div className="container mx-auto px-4">
                    <h2 className="text-center text-3xl font-bold mb-16 text-blue-200 uppercase tracking-wider">
                        Experience
                    </h2>

                    {experiences.map((item, idx) => (
                        <ExperienceItem key={idx} item={item} />
                    ))}

                    <h2 id="projects" className="text-center text-3xl font-bold mb-16 mt-20 text-pink-200 uppercase tracking-wider">
                        Freelance Projects
                    </h2>

                    {freelanceProjects.map((item, idx) => (
                        <ExperienceItem key={idx} item={item} />
                    ))}
                </div>

                <style jsx>{`
                    @keyframes gradientFlow {
                        0% {
                            background-position: 0% 50%;
                        }
                        50% {
                            background-position: 100% 50%;
                        }
                        100% {
                            background-position: 0% 50%;
                        }
                    }
                    .animate-gradient-flow {
                        background: linear-gradient(-45deg, #0a0f1f, #0a1126, #0e132c, #081020);
                        background-size: 400% 400%;
                        animation: gradientFlow 15s ease infinite;
                    }
                `}</style>
            </section>
        </>
    );
};

export default Experience;
