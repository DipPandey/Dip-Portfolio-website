// components/Layout.js
import Sidebar from './sidebar';
import CustomCursor from './CustomCursor';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-gray-900 text-gray-200">
            
            <div className="flex-1 lg:ml-60 p-2 lg:p-4">
                {children}
            </div>
            <Sidebar />
            <CustomCursor />
        </div>
    );
};

export default Layout;
