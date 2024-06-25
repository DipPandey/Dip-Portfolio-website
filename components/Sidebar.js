import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faCodepen, faInstagram, faXTwitter, faGoodreadsG } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-lg flex flex-col justify-between">
            <div>
                <div className="text-center p-6 font-bold text-2xl border-b border-border">
                    Dip Pandey
                </div>
                <nav className="mt-4">
                    <ul className="space-y-2">
                        <li className="group">
                            <Link
                                to="home"
                                smooth={true}
                                duration={500}
                                className="flex items-center p-4 cursor-pointer transition-colors duration-200 hover:bg-red-600 hover:text-white group-hover:scale-105 transform transition-transform duration-200"
                            >
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
                                Projects
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="p-6">
                <ul className="flex justify-around">
                    <li>
                        <a href="https://github.com/DipPandey" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/dip-pandey-a402b81b4/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                    </li>
                 
                    <li>
                        <a href="https://www.instagram.com/dip.devs/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/DipdevJourney" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FontAwesomeIcon icon={faXTwitter} size="lg" />
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
