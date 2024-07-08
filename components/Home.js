import useVisibility from './useVisibility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faTwitter, faFileDownload } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    const ref = useVisibility();

    return (
        <section id="home" ref={ref} className="animated">
            <div className="container mx-auto px-4 py-1 lg:py-1">
                <div className="bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-lg p-8 lg:p-16 shadow-xl flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/4 mb-2 lg:mb-0 lg:mr-8">
                        <img
                            src="/images/photo dip.png"
                            alt="Dip Pandey"
                            className="animated-image rounded-full w-full border-1 border-transparent-400 shadow-lg"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-2xl lg:text-4xl font-extrabold mb-3">
                            Hello, my name is <span className="text-blue-300">Dip Pandey</span>
                        </h2>
                        <h3 className="text-2xl lg:text-2xl text-blue-600 mb-6">
                            Developer & Tech Enthusiast
                        </h3>
                        <p className="mt-3 text-lg leading-relaxed text-gray-300">
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
                        <div className="mt-8 flex flex-col items-center lg:items-start">
                            <div className="flex items-center space-x-4 mb-4">
                                <a
                                    href="/Profile.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-600 text-white px-4 py-2 rounded shadow hover:bg-blue-200 transition duration-200 flex items-center"
                                >
                                    <FontAwesomeIcon icon={faFileDownload} className="mr-2" />
                                    Download Resume
                                </a>
                                <p className="text-gray-300">
                                    Email: <a href="mailto:dippandey61@outlook.com" className="text-blue-300 hover:underline">dippandey61@outlook.com</a>
                                </p>
                            </div>
                            <div className="flex space-x-4">
                                <a href="https://github.com/DipPandey" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                    <FontAwesomeIcon icon={faGithub} size="lg" />
                                </a>
                                <a href="https://www.linkedin.com/in/dip-pandey-a402b81b4/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                                </a>
                                <a href="https://www.instagram.com/dip.devs/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                                </a>
                                <a href="https://x.com/DipdevJourney" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
