// components/CustomCursor.js
import { useEffect } from 'react';

const CustomCursor = () => {
    useEffect(() => {
        const cursor = document.querySelector('.custom-cursor');

        const colors = [
            'rgba(0, 183, 255, 0.7)',
            'rgba(255, 0, 255, 0.7)',
            'rgba(0, 255, 183, 0.7)',
            'rgba(255, 183, 0, 0.7)',
            'rgba(183, 0, 255, 0.7)'
        ];

        const moveCursor = (e) => {
            // Move main cursor
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

            // Create particle effect
            createParticle(e.clientX, e.clientY);
        };

        const createParticle = (x, y) => {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.backgroundColor = randomColor;
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            document.body.appendChild(particle);

            // Remove particle after fade-out
            setTimeout(() => {
                particle.remove();
            }, 800);
        };

        const handleMouseDown = () => {
            cursor.classList.add('active');
        };

        const handleMouseUp = () => {
            cursor.classList.remove('active');
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return <div className="custom-cursor"></div>;
};

export default CustomCursor;
