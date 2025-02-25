import { useState, useEffect } from 'react';
import useVisibility from './useVisibility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const ref = useVisibility();
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const iframe = document.getElementById("youtube-video");

        if (iframe) {
            iframe.src = "https://www.youtube.com/embed/RpJFaAV9bEo?autoplay=1&playsinline=1";

            // Try sending a postMessage to unmute (may not always work due to browser restrictions)
            setTimeout(() => {
                iframe.contentWindow?.postMessage('{"event":"command","func":"unMute","args":""}', '*');
            }, 2000);
        }
    }, []);

    const toggleShowAll = () => setShowAll(!showAll);

    return (
        <section id="home" ref={ref} className="animated relative overflow-hidden">
            {/* Embedded YouTube Video */}
            <div className="relative w-full h-[50vh] lg:h-[75vh] flex items-center justify-center">
                <iframe
                    id="youtube-video"
                    className="absolute inset-0 w-[90%] h-[90%] max-h-full rounded-lg opacity-85"
                    src="https://www.youtube.com/embed/RpJFaAV9bEo?enablejsapi=1&autoplay=1&playsinline=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            {/* Main Content Section */}
            <div className="container mx-auto px-4 py-6 lg:py-10 overflow-x-hidden">
                <div className="bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-lg p-6 lg:p-8 shadow-xl flex flex-col lg:flex-row items-center transform transition-transform hover:shadow-blue-500/30 hover:scale-[1.005] w-full max-w-screen-lg mx-auto">
                    <div className="lg:w-3/4 mt-4 lg:mt-0 max-w-screen-sm mx-auto lg:mx-0">
                        <h2 className="text-xl lg:text-3xl font-extrabold mb-3 uppercase tracking-wide">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-purple-400">
                                Hello, I am <span className="font-extrabold">Dip Pandey</span>
                            </span>
                        </h2>
                        <h3 className="text-xl lg:text-2xl text-blue-600 mb-4 font-semibold italic">
                            Full-Stack Engineer driving seamless user experiences and business growth
                        </h3>
                        <p className="mt-2 text-base leading-relaxed text-gray-300">
                            With a strong foundation in both front-end and back-end development, I specialize in building high-performance web applications that enhance user satisfaction and drive results.
                        </p>

                        {/* Highlights */}
                        <div className="mt-4 text-gray-200 text-sm leading-relaxed">
                            <h4 className="font-bold text-blue-300 uppercase tracking-wider mb-2">Highlights:</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-300">
                                {[
                                    "Optimized page load times by over 20% in applications like CourseStore.",
                                    "Implemented secure, scalable APIs for applications such as Stock Manager.",
                                    "Designed and developed responsive front-end interfaces with React and Next.js.",
                                    "Architected and maintained robust database systems (MongoDB, PostgreSQL).",
                                    "Automated CI/CD pipelines using GitHub Actions and Jenkins.",
                                    "Integrated cloud services (AWS, Azure) for hosting full-stack applications.",
                                    "Enhanced performance using caching strategies and load balancing.",
                                    "Implemented advanced authentication mechanisms (JWT, OAuth)."
                                ].slice(0, showAll ? 8 : 5).map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                            <button onClick={toggleShowAll} className="mt-4 text-blue-400 hover:text-blue-500 transition-all">
                                {showAll ? 'Show Less' : 'See More'}
                            </button>
                        </div>

                        {/* Social Links */}
                        <div className="mt-6 flex space-x-4 items-center">
                            <a href="https://github.com/DipPandey" target="_blank" rel="noopener noreferrer" className="text-white bg-black px-3 py-2 rounded-lg flex items-center space-x-2 transition hover:scale-105">
                                <FontAwesomeIcon icon={faGithub} size="lg" />
                                <span className="font-bold">GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/dip-pandey-a402b81b4/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                            </a>
                            <a href="https://www.instagram.com/dip.devs/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                <FontAwesomeIcon icon={faInstagram} size="lg" />
                            </a>
                            <a href="https://x.com/DipdevJourney" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                <FontAwesomeIcon icon={faTwitter} size="lg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
