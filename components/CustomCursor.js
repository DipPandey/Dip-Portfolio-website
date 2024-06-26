// components/CustomCursor.js
import { useEffect } from 'react';

const CustomCursor = () => {
    useEffect(() => {
        const cursor = document.querySelector('.custom-cursor');

        const moveCursor = (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;

            // Create particle effect
            createParticle(e.clientX, e.clientY);
        };

        const createParticle = (x, y) => {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            document.body.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 1000);
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    return <div className="custom-cursor"></div>;
};

export default CustomCursor;
