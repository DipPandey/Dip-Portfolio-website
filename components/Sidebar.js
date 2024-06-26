import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHome, faBriefcase, faProjectDiagram, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-lg flex flex-col justify-between">
            <div className="flex flex-col items-center mt-6">
                <div className="w-50 h-40 mb-5">
                    <img
                        src="/images/photo dip.png"
                        alt="Dip Pandey"
                        className="rounded-full w-full h-full border-1.3 border-transparent-200 shadow-lg"
                    />
                </div>
                <div className="text-center font-bold text-2xl mb-2">
                    Dip Pandey
                </div>
                <div className="flex space-x-4 mb-4">
                    <a href="https://github.com/DipPandey" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FontAwesomeIcon icon={faGithub} size="lg" />
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
                <div className="text-center mb-6">
                    <a
                        href="/Profile.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white bg-transparent-600 px-3 py-2 rounded shadow hover:bg-gray-500 transition duration-100"
                    >
                        <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                        View Resume
                    </a>
                </div>
            </div>
            <nav className="flex-1">
                <ul className="space-y-2">
                    <li className="group">
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className="flex items-center p-4 cursor-pointer transition-colors duration-200 hover:bg-red-600 hover:text-white group-hover:scale-105 transform transition-transform duration-200"
                        >
                            <FontAwesomeIcon icon={faHome} className="mr-3" />
                            Home
                        </Link>
                    </li>
                    <li className="group">
                        <Link
                            to="experience"
                            smooth={true}
                            duration={500}
                            className="flex items-center p-4 cursor-pointer transition-colors duration-200 hover:bg-yellow-600 hover:text-white group-hover:scale-105 transform transition-transform duration-200"
                        >
                            <FontAwesomeIcon icon={faBriefcase} className="mr-3" />
                            Experience
                        </Link>
                    </li>
                    <li className="group">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="flex items-center p-4 cursor-pointer transition-colors duration-200 hover:bg-blue-600 hover:text-white group-hover:scale-105 transform transition-transform duration-200"
                        >
                            <FontAwesomeIcon icon={faProjectDiagram} className="mr-3" />
                            Projects
                        </Link>
                    </li>

                </ul>

            </nav>

        </div>
    );
};

export default Sidebar;
