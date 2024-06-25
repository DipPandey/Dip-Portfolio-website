const Sidebar = () => {
    return (
        <div className="bg-gray-800 text-white w-64 min-h-screen flex flex-col">
            <div className="text-center p-4 font-bold text-xl">Atlas</div>
            <nav className="mt-4 flex-1">
                <ul>
                    <li className="p-4 hover:bg-gray-700">
                        <a href="#home">Home</a>
                    </li>
                    <li className="p-4 hover:bg-gray-700">
                        <a href="#about">About</a>
                    </li>
                    <li className="p-4 hover:bg-gray-700">
                        <a href="#services">Services</a>
                    </li>
                    <li className="p-4 hover:bg-gray-700">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="p-4 hover:bg-gray-700">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
