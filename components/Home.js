import useVisibility from './useVisibility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const ref = useVisibility();

    return (
        <section id="home" ref={ref} className="animated">
            <div className="container mx-auto px-2 py-2 lg:py-2">
                <div className="bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-lg p-6 lg:p-8 shadow-xl flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/4 mb-3 lg:mb-0 lg:mr-6">
                        <img
                            src="/images/newdip.png"
                            alt="Dip Pandey"
                            className="animated-image rounded-full w-full border-1 border-transparent-400 shadow-lg"
                        />
                    </div>
                    <div className="lg:w-3/4">
                        <h2 className="text-xl lg:text-3xl font-extrabold mb-3">
                            Hello, my name is <span className="text-blue-300">Dip Pandey</span>
                        </h2>
                        <h3 className="text-xl lg:text-xl text-blue-600 mb-4">
                            Developer & Tech Enthusiast
                        </h3>
                        <p className="mt-2 text-base leading-relaxed text-gray-300">
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
                        <div className="mt-6 flex flex-col items-center lg:items-start">
                            <div className="flex items-center space-x-4 mb-4">
                                <a
                                    href="/Dip resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-600 text-white px-3 py-1.5 rounded shadow hover:bg-blue-200 transition duration-200 flex items-center"
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
