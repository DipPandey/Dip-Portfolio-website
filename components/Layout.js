// Layout.js
import { useState } from 'react';
import Sidebar from './Sidebar';
import CustomCursor from './CustomCursor';

const Layout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="relative min-h-screen bg-gray-900 text-gray-200">
            {/* Mobile Hamburger Button */}
            <div className="lg:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={toggleSidebar}
                    className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-200 focus:outline-none shadow-lg"
                >
                    <span className="block w-6 h-0.5 bg-gray-300 mb-1"></span>
                    <span className="block w-6 h-0.5 bg-gray-300 mb-1"></span>
                    <span className="block w-6 h-0.5 bg-gray-300"></span>
                </button>
            </div>

            {/* Overlay for mobile when sidebar is open */}
            {sidebarOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Sidebar with higher z-index */}
            <div
                className={`
                    fixed top-0 h-full w-64 bg-gray-800 overflow-y-auto z-50
                    transform transition-transform duration-300
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                `}
            >
                <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            </div>

            {/* Main Content Area */}
            <div className="relative lg:ml-64 p-4 lg:p-6 overflow-x-hidden z-10">
                {children}
            </div>

            <CustomCursor />
        </div>
    );
};

export default Layout;
