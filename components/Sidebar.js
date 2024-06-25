const Sidebar = () => {
    return (
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white w-64 min-h-screen flex flex-col shadow-lg">
            <div className="text-center p-6 font-bold text-2xl border-b border-gray-700">
                Dip Pandey
            </div>
            <nav className="mt-4 flex-1">
                <ul className="space-y-2">
                    <li className="group">
                        <a
                            href="#Home"
                            className="flex items-center p-4 transition-colors duration-200 hover:bg-red-600 hover:text-white group-hover:scale-105 transform transition-transform duration-200"
                        >
                            <span className="material-icons mr-3">description</span>
                            Resume
                        </a>
                    </li>
                    <li className="group">
                        <a
                            href="#About"
                            className="flex items-center p-4 transition-colors duration-200 hover:bg-green-600 hover:text-white group-hover:scale-105 transform transition-transform duration-200"
                        >
                            <span className="material-icons mr-3">person</span>
                            About
                        </a>
                    </li>
                    <li className="group">
                        <a
                            href="#Projects"
                            className="flex items-center p-4 transition-colors duration-200 hover:bg-blue-600 hover:text-white group-hover:scale-105 transform transition-transform duration-200"
                        >
                            <span className="material-icons mr-3">work</span>
                            Portfolio
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
