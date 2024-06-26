// Add this to your components
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

const Home = () => {
    const ref = useVisibility();
    return (
        <section
            id="home"
            className="hover-shadow wobble-background flex items-center justify-center min-h-screen bg-gray-100 text-gray-900"
            ref={ref}
        >
            <div className="container mx-auto px-4 py-10 lg:py-20">
                <div className="bg white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-lg p-8 lg:p-16 shadow-xl flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/3 mb-8 lg:mb-0 lg:mr-8">
                        <img
                            src="/images/photo dip.png"
                            alt="Dip Pandey"
                            className="animated-image rounded-full w-full border-4 border-gray-200 shadow-lg"
                        />
                    </div>
                    <div className="lg:w-2/3">
                        <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
                            Hello, my name is <span className="text-blue-600">Dip Pandey</span>
                        </h2>
                        <h3 className="text-2xl lg:text-3xl text-blue-500 mb-6">
                             Developer & Tech Enthusiast
                        </h3>
                        <p className="mt-4 text-lg leading-relaxed text-gray-700">
                            My journey in the field of technology began with a deep-rooted passion for video editing,
                            which eventually blossomed into a fascination with creating seamless and engaging digital
                            experiences. In 2019, I took a significant leap and moved to Tasmania, Australia from Nepal
                            to pursue a degree in Information Technology at the University of Tasmania (UTAS). This
                            transition was both challenging and rewarding, as I navigated a new country on my own while
                            immersing myself in rigorous academic studies. During my time at UTAS, I honed my skills in
                            both front-end and back-end development, cultivating a strong foundation in software engineering.
                            Driven by a desire to solve real-world problems through technology, I have worked on numerous
                            projects that blend creativity with functionality. As I continue to expand my expertise, my
                            aspiration is to become a full-stack engineer, always eager to learn and innovate. Whether it's
                            developing intuitive user interfaces or robust server-side solutions, I am committed to leveraging
                            my skills to create impactful and efficient digital solutions.

                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
