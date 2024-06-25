import Sidebar from './Sidebar';
import CustomCursor from './CustomCursor';
const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
          
            <Sidebar />
            <div className="flex-1 lg:ml-64 p-6 bg-gray-100 min-h-screen">

                {children}
            </div>
            <CustomCursor />
        </div>
    );
};

export default Layout;
