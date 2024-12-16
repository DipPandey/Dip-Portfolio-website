// Home.js
import useVisibility from './useVisibility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const ref = useVisibility();

    return (
        <section
            id="home"
            ref={ref}
            className="animated relative overflow-hidden" // Ensures no horizontal overflow
        >
            {/* Animated gradient background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1f2937] animate-gradient-flow"></div>

            <div className="container mx-auto px-4 py-6 lg:py-10 overflow-x-hidden">
                {/* Increased px to 4 for consistency and ensure enough padding */}
                <div
                    className="
                    bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg 
                    rounded-lg p-6 lg:p-8 shadow-xl flex flex-col lg:flex-row items-center 
                    transform transition-transform hover:shadow-blue-500/30 hover:scale-[1.005]
                    w-full max-w-screen-lg mx-auto
                "
                >
                    <div className="lg:w-1/4 mb-3 lg:mb-0 lg:mr-6 flex-shrink-0">
                        <div className="relative w-full h-auto">
                            <img
                                src="/images/newdip.png"
                                alt="Dip Pandey"
                                className="animated-image rounded-full w-full border border-transparent-400 shadow-lg 
                                transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/40 object-cover"
                            />
                            <div
                                className="absolute inset-0 rounded-full pointer-events-none"
                                style={{
                                    background: 'radial-gradient(circle at center, rgba(0,183,255,0.2) 0%, transparent 60%)',
                                    filter: 'blur(20px)',
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="lg:w-3/4 mt-4 lg:mt-0 max-w-screen-sm mx-auto lg:mx-0">
                        <h2 className="text-xl lg:text-3xl font-extrabold mb-3 uppercase tracking-wide break-words">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-purple-400">
                                Hello, I am <span className="font-extrabold">Dip Pandey</span>
                            </span>
                        </h2>
                        <h3 className="text-xl lg:text-2xl text-blue-600 mb-4 font-semibold italic break-words">
                            Full-Stack Engineer driving seamless user experiences and business growth
                        </h3>
                        <p className="mt-2 text-base leading-relaxed text-gray-300 break-words">
                            With a strong foundation in both front-end and back-end development, I specialize in building
                            high-performance web applications that enhance user satisfaction and drive results. From
                            migrating to Tasmania to pursue my IT degree at UTAS, to tackling real-world challenges with
                            AWS, Next.js, and Node.js, MongoDb, Mysql, API management, I continuously seek to deliver value through innovative solutions.
                        </p>

                        {/* Highlights / Achievements */}
                        <div className="mt-4 text-gray-200 text-sm leading-relaxed break-words">
                            <h4 className="font-bold text-blue-300 uppercase tracking-wider mb-2">Highlights:</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-300">
                                <li>Optimized page load times by over 20% in applications like <em>CourseStore</em>, boosting user engagement and improving SEO performance.</li>
                                <li>Implemented secure, scalable APIs for applications such as <em>Stock Manager</em>, ensuring seamless third-party integrations and product reliability.</li>
                                <li>Designed and developed responsive front-end interfaces with React and Next.js for projects like <em>AI-Powered Quiz Buddy</em>, enhancing user experience across devices.</li>
                                <li>Architected and maintained robust database systems (e.g., MongoDB, PostgreSQL) for managing complex data relationships in applications like <em>Health Appointment Scheduler</em>.</li>
                                <li>Automated CI/CD pipelines using tools like GitHub Actions and Jenkins, streamlining deployment processes for scalable apps such as <em>Secure Login & Permissions Web App</em>.</li>
                                <li>Integrated cloud services (e.g., AWS, Azure) for hosting and scaling full-stack applications, ensuring cost-effective and reliable deployments for platforms like <em>Next.js Portfolio Website</em>.</li>
                                <li>Enhanced application performance through caching strategies, load balancing, and server-side optimizations in apps such as <em>Road Network Shortest Path</em>.</li>
                                <li>Implemented advanced authentication and authorization mechanisms (e.g., JWT, OAuth) for secure data management in applications like <em>Secure Login & Permissions Web App</em>.</li>
                                <li>Collaborated with cross-functional teams in agile environments, delivering high-quality features ahead of schedule for client-focused apps like <em>Applify Attraction</em>.</li>
                                <li>Built reusable components and modular codebases for scalable development in projects like <em>AI-Powered Quiz Buddy</em>.</li>
                                <li>Conducted thorough code reviews and implemented unit/integration testing to ensure code quality and reliability in real-world applications.</li>
                                <li>Utilized DevOps best practices, such as monitoring and alerting (e.g., Prometheus, Grafana), to maintain system uptime and monitor health in cloud-hosted applications.</li>
                                <li>Mentored junior developers and collaborated with peers, fostering a collaborative team environment and accelerating project delivery.</li>
                                <li>Explored and applied artificial intelligence tools, as in <em>AI-Powered Quiz Buddy</em>, to enhance features like dynamic quiz generation and data-driven analytics.</li>
                                <li>Developed complete, fully-fledged full-stack applications, including <em>CourseStore</em>, <em>Stock Manager</em>, and <em>Secure Login & Permissions Web App</em>, showcasing expertise in React, Node.js, MongoDB, and modern web technologies.</li>
                                <li>Continuously learning cutting-edge technologies and frameworks, including OpenAI, Tailwind CSS, and GraphQL, to stay industry-ready and maximize productivity.</li>

                            </ul>
                        </div>

                        <div className="mt-6 flex flex-col items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
                            <div className="flex items-center space-x-4 w-full flex-wrap">
                                <a
                                    href="/Dip SE resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        bg-gray-600 text-white px-3 py-1.5 rounded shadow hover:bg-blue-300 transition 
                                        duration-200 flex items-center font-semibold hover:shadow-blue-500/50 whitespace-nowrap
                                    "
                                >
                                    <FontAwesomeIcon icon={faFileDownload} className="mr-2" />
                                    Download Resume
                                </a>
                                <p className="text-gray-300 whitespace-nowrap">
                                    Email: <a href="mailto:dippandey61@outlook.com" className="text-blue-300 hover:underline break-words">dippandey61@outlook.com</a>
                                </p>
                            </div>
                            <div className="flex space-x-4 items-center flex-wrap">
                                <a
                                    href="https://github.com/DipPandey"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white bg-black px-3 py-2 rounded-lg flex items-center space-x-2 transition transform hover:scale-105 hover:bg-gray-900 focus:outline-none"
                                >
                                    <FontAwesomeIcon icon={faGithub} size="lg" />
                                    <span className="font-bold">GitHub</span>
                                </a>
                                <a href="https://www.linkedin.com/in/dip-pandey-a402b81b4/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-200">
                                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                                </a>
                                <a href="https://www.instagram.com/dip.devs/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-200">
                                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                                </a>
                                <a href="https://x.com/DipdevJourney" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors duration-200">
                                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes gradientFlow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient-flow {
                    background: linear-gradient(-45deg, #0f172a, #111827, #1f2937, #15202b);
                    background-size: 400% 400%;
                    animation: gradientFlow 15s ease infinite;
                }
                .animated-image {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
            `}</style>
        </section>
    );
};

export default Home;
