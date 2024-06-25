import { Link } from 'react-scroll';

const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-lg">
            <div className="text-center p-6 font-bold text-2xl border-b border-gray-700">
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
    );
};

export default Sidebar;
