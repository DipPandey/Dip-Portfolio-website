import Sidebar from './Sidebar';
import CustomCursor from './CustomCursor';

const Layout = ({ children }) => {
    return (
        <div className="relative min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <Sidebar />
            <div className="flex-1 lg:ml-64 p-6 lg:p-12 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg min-h-screen shadow-xl">
                {children}
            </div>
            <CustomCursor />
        </div>
    );
};

export default Layout;
