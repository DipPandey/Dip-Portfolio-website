import { useState, useEffect } from 'react';

const Resume = () => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) {
            const createDrop = () => {
                const drop = document.createElement('div');
                drop.className = 'drop';
                drop.style.left = `${Math.random() * window.innerWidth}px`;
                document.body.appendChild(drop);

                setTimeout(() => {
                    drop.remove();
                }, 2000);
            };

            const interval = setInterval(createDrop, 100);
            return () => clearInterval(interval);
        }
    }, [isHovered]);

    return (
        <div className="fixed top-0 right-0 m-4">
            <a
                href="/Profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-lg group hover:text-blue-500"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                View Resume
            </a>
        </div>
    );
};

export default Resume;
