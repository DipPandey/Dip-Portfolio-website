// components/Home.js
import useVisibility from './useVisibility';

const Home = () => {
    const ref = useVisibility();

    return (
        <section id="home" ref={ref} className="animated opacity-10">
            <div className="container mx-auto px-4 py-1 lg:py-1">
                <div className="bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-lg p-8 lg:p-16 shadow-xl flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/4 mb-2 lg:mb-0 lg:mr-8">
                        <img
                            src="/images/photo dip.png"
                            alt="Dip Pandey"
                            className="animated-image rounded-full w-full border-2 border-transparent-200 shadow-lg"
                        />
                    </div>
                    <div className="lg:w-2/3">
                        <h2 className="text-2xl lg:text-4xl font-extrabold mb-3">
                            Hello, my name is <span className="text-blue-300">Dip Pandey</span>
                        </h2>
                        <h3 className="text-2xl lg:text-2xl text-blue-600 mb-6">
                            Developer & Tech Enthusiast
                        </h3>
                        <p className="mt-4 text-lg leading-relaxed text-gray-300">
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
