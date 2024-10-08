// components/Sidebar.js
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHome, faBriefcase, faProjectDiagram, faFileAlt, faTools, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`fixed top-0 left-0 h-screen w-60 bg-gradient-to-b from-gray-600 to-gray-900 text-white shadow-lg flex flex-col justify-between transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0`}>
            <div className="flex flex-col items-center mt-6">
                <button className="lg:hidden text-white text-2xl mb-6" onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </button>
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-2">
                    <img
                        src="/images/newdip.png"
                        alt="Dip Pandey"
                        className="rounded-full w-full h-full object-cover shadow-lg"
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
                        href="/Dip SE resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white bg-gray-600 px-3 py-2 rounded shadow hover:bg-gray-500 transition duration-100"
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
                            onClick={toggleSidebar}
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
                            onClick={toggleSidebar}
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
                            onClick={toggleSidebar}
                        >
                            <FontAwesomeIcon icon={faProjectDiagram} className="mr-3" />
                            Projects
                        </Link>
                    </li>
                    <li className="group">
                        <Link
                            to="skills"
                            smooth={true}
                            duration={500}
                            className="flex items-center p-4 cursor-pointer transition-colors duration-200 hover:bg-green-600 hover:text-white group-hover:scale-105 transform transition-transform duration-200"
                            onClick={toggleSidebar}
                        >
                            <FontAwesomeIcon icon={faTools} className="mr-3" />
                            Skills
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="p-6 text-center text-gray-400 text-sm">
                &copy; 2024 Dip Pandey. All rights reserved.
            </div>
        </div>
    );
};

export default Sidebar;
