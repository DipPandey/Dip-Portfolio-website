// components/CustomCursor.js
import { useEffect } from 'react';

const CustomCursor = () => {
    useEffect(() => {
        const createParticle = (e) => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${e.clientX}px`;
            particle.style.top = `${e.clientY}px`;
            document.body.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 1000);
        };

        window.addEventListener('mousemove', createParticle);
        return () => window.removeEventListener('mousemove', createParticle);
    }, []);

    return null;
};

export default CustomCursor;
