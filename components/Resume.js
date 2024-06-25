const Resume = () => {
    return (
        <div className="fixed top-0 right-0 m-4">
            <a
                href="/Profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block text-lg group"
            >
                <span className="relative z-10 block px-4 py-2 overflow-hidden leading-tight text-white transition-colors duration-300 ease-out border-2 border-white rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:from-blue-500 group-hover:to-purple-500"></span>
                    <span className="relative">View Resume</span>
                </span>
                <span
                    className="absolute bottom-0 right-0 w-full h-full -mb-1 -mr-1 transition-all duration-200 ease-linear bg-white rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                ></span>
            </a>
        </div>
    );
};

export default Resume;
