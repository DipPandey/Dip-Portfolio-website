import { useEffect, useRef } from 'react';

const useVisibility = () => {
    const ref = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(ref.current);
    }, []);
    return ref;
};

export default useVisibility;
