// Sidebar.js
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faLinkedin,
    faInstagram,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
    faHome,
    faBriefcase,
    faProjectDiagram,
    faFileAlt,
    faTools,
    faBars,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';

/**
 * Same structure & code, updated design:
 * - Static dark gradient (instead of from-gray-600 to gray-900).
 * - Subtle glow on profile image.
 * - No swirling background; no scroll changes.
 * - Absolutely no overflow or scrollbar modifications.
 */

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <>
            {/* If using Next.js, <style jsx> is fine; otherwise place these in your global CSS */}
            <style jsx>{`
        /* A static, deeper dark gradient for the sidebar background (no animation) */
        .bg-custom-gradient {
          background: linear-gradient(135deg, #0e1622 0%, #1c2e3e 100%);
        }

        /* Subtle glow on the profile image */
        .img-glow {
          /* Adds a gentle, always-on glow. No overflow or scroll changes. */
          filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.2));
          transition: filter 0.3s ease;
        }
        .img-glow:hover {
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
        }
      `}</style>

            <div
                className={`
          fixed top-0 left-0 h-screen w-60
          text-white shadow-lg flex flex-col justify-between
          transform
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          transition-transform duration-300 ease-in-out
          lg:translate-x-0
          bg-custom-gradient
        `}
            >
                <div className="flex flex-col items-center mt-6">
                    {/* Toggle Button (Mobile) */}
                    <button
                        className="lg:hidden text-white text-2xl mb-6"
                        onClick={toggleSidebar}
                    >
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                    </button>

                    {/* Profile Image with subtle glow */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-2">
                        <img
                            src="/images/newdip.png"
                            alt="Dip Pandey"
                            className="rounded-full w-full h-full object-cover shadow-lg img-glow"
                        />
                    </div>

                    {/* Name */}
                    <div className="text-center font-bold text-2xl mb-2">
                        Dip Pandey
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-4 mb-4">
                        <a
                            href="https://github.com/DipPandey"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400"
                        >
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/dip-pandey-a402b81b4/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                        <a
                            href="https://www.instagram.com/dip.devs/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400"
                        >
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                        <a
                            href="https://x.com/DipdevJourney"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400"
                        >
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </a>
                    </div>

                    {/* Resume Button */}
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

                {/* Nav Links */}
                <nav className="flex-1">
                    <ul className="space-y-2">
                        <li className="group">
                            <Link
                                to="home"
                                smooth={true}
                                duration={500}
                                className="
                  flex items-center p-4 cursor-pointer
                  transition-colors duration-200
                  hover:bg-red-600 hover:text-white
                  group-hover:scale-105 transform transition-transform duration-200
                "
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
                                className="
                  flex items-center p-4 cursor-pointer
                  transition-colors duration-200
                  hover:bg-yellow-600 hover:text-white
                  group-hover:scale-105 transform transition-transform duration-200
                "
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
                                className="
                  flex items-center p-4 cursor-pointer
                  transition-colors duration-200
                  hover:bg-blue-600 hover:text-white
                  group-hover:scale-105 transform transition-transform duration-200
                "
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
                                className="
                  flex items-center p-4 cursor-pointer
                  transition-colors duration-200
                  hover:bg-green-600 hover:text-white
                  group-hover:scale-105 transform transition-transform duration-200
                "
                                onClick={toggleSidebar}
                            >
                                <FontAwesomeIcon icon={faTools} className="mr-3" />
                                Skills
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Footer */}
                <div className="p-6 text-center text-gray-400 text-sm">
                    &copy; 2024 Dip Pandey. All rights reserved.
                    <br />
                    Made using React, Next.js, Styled with Tailwind CSS.
                    <br />
                    Deployed using vercel
                </div>
            </div>
        </>
    );
};

export default Sidebar;
