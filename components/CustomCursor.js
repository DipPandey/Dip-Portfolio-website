import { useEffect } from 'react';

const CustomCursor = () => {
    useEffect(() => {
        const cursor = document.querySelector('.custom-cursor');

        const moveCursor = (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;

            // Create a wet spot at the cursor position
            createWetSpot(e.clientX, e.clientY);
        };

        const createRaindrop = () => {
            const raindrop = document.createElement('div');
            raindrop.classList.add('raindrop');
            raindrop.style.left = `${Math.random() * window.innerWidth}px`;
            raindrop.style.width = `${Math.random() * 5 + 5}px`;
            raindrop.style.height = raindrop.style.width;
            raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`;
            document.body.appendChild(raindrop);

            setTimeout(() => {
                raindrop.remove();
            }, 3000);
        };

        const createWetSpot = (x, y) => {
            const wetSpot = document.createElement('div');
            wetSpot.classList.add('wet-spot');
            wetSpot.style.left = `${x}px`;
            wetSpot.style.top = `${y}px`;
            document.body.appendChild(wetSpot);

            setTimeout(() => {
                wetSpot.style.opacity = '0';
                setTimeout(() => {
                    wetSpot.remove();
                }, 1000);
            }, 1000);
        };

        const addHoverEffect = () => {
            document.querySelectorAll('.hover-target').forEach(element => {
                element.addEventListener('mouseenter', () => {
                    cursor.classList.add('hovered');
                });
                element.addEventListener('mouseleave', () => {
                    cursor.classList.remove('hovered');
                });
            });
        };

        window.addEventListener('mousemove', moveCursor);
        const rainInterval = setInterval(createRaindrop, 100);

        addHoverEffect();

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            clearInterval(rainInterval);
        };
    }, []);

    return <div className="custom-cursor"></div>;
};

export default CustomCursor;
