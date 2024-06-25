import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 lg:ml-64 p-6 bg-gray-100 min-h-screen">
                {children}
            </div>
        </div>
    );
};

export default Layout;
