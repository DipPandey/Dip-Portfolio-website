const GlassCard = ({ children }) => {
    return (
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg">
            {children}
        </div>
    );
};

export default GlassCard;
