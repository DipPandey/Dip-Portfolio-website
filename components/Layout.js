// components/Layout.js
import { useState } from 'react';
import Sidebar from './sidebar';
import CustomCursor from './CustomCursor';

const Layout = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-gray-900 text-gray-200">
            <button
                className="lg:hidden p-4"
                onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? 'Close' : 'Menu'}
            </button>
            {isSidebarOpen && <Sidebar />}
            <div className={`flex-1 p-4 lg:p-6 ${isSidebarOpen ? 'hidden lg:block' : ''}`}>
                {children}
            </div>
            <CustomCursor />
        </div>
    );
};

export default Layout;
