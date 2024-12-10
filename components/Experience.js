// Experience.js
import React from 'react';

const experiences = [
    {
        role: 'Backup Manager Software Developer',
        project: 'Omnicore Project',
        description: 'Developed a front-end for a backup manager software at the University of Tasmania. Integrated AWS, Python scripts, Django UI, and PostgreSQL optimization for secure data backups and efficient storage management.',
        duration: '2018 — 2024',
        website: 'https://omnicore.com.au',
        skills: ['JavaScript', 'TypeScript', 'HTML & SCSS', 'React', 'Next.js', 'Django', 'Node.js', 'PostgreSQL', 'AWS', 'Deadline Mangement', 'Agile Cycle'],
        image: '/images/omnicore.png',
        impact: [
            'Increased backup efficiency by 30%, reducing downtime during maintenance windows.',
            'Collaborated with a cross-functional team of 5, ensuring smooth integration with AWS services.',
            'Maintained agile sprint cycle, consistently delivering features before deadlines.'
        ],
        testimonial: '“Dip consistently delivered front-end features ahead of schedule, improving user experience and ensuring data integrity. A reliable and proactive team member!” — Project Manager at Omnicore'
    },
    {
        role: 'Web Maintenance',
        company: 'The Thirds',
        description: 'Ensured a responsive and engaging user experience on The Thirds website. Integrated APIs, implemented custom JavaScript features, and improved performance metrics for better client engagement.',
        duration: 'JULY — DEC 2017',
        website: 'https://dipburly.wixsite.com/the-thirds',
        skills: ['Wix', 'HTML', 'CSS', 'JavaScript', 'Updating client portfolio', 'Customizing site and SEOs'],
        image: '/images/thethird.png',
        impact: [
            'Reduced page load time by 25%, boosting user engagement and decreasing bounce rate.',
            'Worked closely with the content team, improving SEO rankings by optimizing metadata and site structure.',
            'Introduced responsive layouts, increasing mobile traffic retention by 20%.'
        ],
        testimonial: '“Dip’s improvements on our website were evident immediately. Mobile users stayed longer, and we received positive feedback from clients.” — Owner at The Thirds'
    },
    {
        role: 'Marketing Manager',
        company: 'Great White Plumbing',
        description: 'Enhanced brand visibility through SEO, content marketing, and social media strategies. Leveraged Google Analytics for data-driven optimizations, improving lead quality and conversion rates.',
        duration: '2016 — 2017',
        website: 'https://australia.chamberofcommerce.com/business-directory/tasmania/new-town/plumber/4654782-great-white-plumbing#google_vignette',
        skills: ['SEO', 'Content Marketing', 'Social Media', 'Google Analytics', 'Website Management'],
        image: '/images/plumbing.png',
        impact: [
            'Increased organic traffic by 35% through targeted SEO campaigns.',
            'Improved social media engagement by 40%, driving brand awareness and local leads.',
            'Analyzed user behavior with Google Analytics, refining marketing strategy and boosting ROI by 20%.'
        ],
        testimonial: '“Dip’s marketing strategies brought us more qualified leads and higher conversion rates than ever before.” — Marketing Lead at Great White Plumbing'
    }
];

const freelanceProjects = [
    {
        role: 'Full-Stack Developer',
        project: 'Artist Portfolio for Mostafa Faraji',
        description: 'Crafted a modern React/Node.js portfolio with MongoDB and Framer Motion animations. Deployed on Vercel, ensuring a smooth, visually engaging user experience.',
        duration: 'FEB 2022 — APR 2022',
        website: 'https://mostafafaraji.com.au',
        skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Framer Motion', 'Vercel'],
        image: '/images/mostafa.png',
        impact: [
            'Reduced deployment time by 50% via efficient CI/CD pipelines on Vercel.',
            'Collaborated closely with the artist, delivering a tailored UI that boosted portfolio interactions by 25%.'
        ]
    },
    {
        role: 'Full-Stack Developer',
        project: 'E-commerce Platform',
        description: 'Developed a full-stack e-commerce solution integrating Stripe for payments and JWT for secure user authentication. Ensured a seamless shopping experience through responsive design.',
        duration: 'JUN 2021 — AUG 2021',
        website: 'https://learncourse-ai.netlify.app/',
        skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT'],
        image: '/images/omnicore-project.jpg',
        impact: [
            'Increased conversion rates by 15% through improved checkout flow and secure payment integration.',
            'Implemented JWT-based auth, reducing unauthorized access and enhancing data security.'
        ]
    },
    {
        role: 'Back-End Developer',
        project: 'API for Web Application',
        description: 'Built a scalable Node.js/Express API with MongoDB and Socket.io. Ensured secure endpoints with JWT and conducted load testing for high-performance scenarios.',
        duration: 'NOV 2021 — DEC 2021',
        skills: ['Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
        image: '/images/HAS.png',
        impact: [
            'Reduced API response time by 20%, improving overall application responsiveness.',
            'Optimized database queries, handling 2x more concurrent users without performance degradation.'
        ]
    },
    {
        role: 'Full-Stack Developer',
        project: 'Stock Management Software',
        description: 'Implemented a Next.js/Node.js inventory system with MongoDB, JWT, and OAuth for secure, real-time stock tracking and order management.',
        duration: 'JULY 2024 — AUG 2024',
        website: 'https://dipstockmanager.netlify.app/',
        skills: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'JWT', 'OAuth'],
        image: '/images/stock.png',
        impact: [
            'Achieved near-instant stock updates, enhancing operational efficiency for the client.',
            'Scaled application to handle a growing product inventory, maintaining quick response times.'
        ]
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
                {/* Glow effect behind card */}
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

                    {/* Skill Chips */}
                    {item.skills && item.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
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

                    {/* Impact & Results Section */}
                    {item.impact && item.impact.length > 0 && (
                        <div className="mb-4">
                            <h4 className="text-sm font-bold text-blue-300 uppercase tracking-wider mb-2">Impact & Results:</h4>
                            <ul className="list-disc list-inside text-gray-300 text-xs space-y-1">
                                {item.impact.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Testimonial Section (Optional) */}
                    {item.testimonial && (
                        <div className="mt-4 text-xs italic text-gray-400 border-t border-white/10 pt-2">
                            {item.testimonial}
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

                    <h2 id="Freelanceprojects" className="text-center text-3xl font-bold mb-16 mt-20 text-pink-200 uppercase tracking-wider">
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
