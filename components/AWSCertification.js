import useVisibility from './useVisibility';

const AWSCertification = () => {
    const ref = useVisibility();

    return (
        <section id="aws-certification" ref={ref} className="animated opacity-0 py-10 lg:py-10 bg-gray-900 text-blue-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-blue-200 text-center">AWS Certification</h2>
                <div className="bg-gray-800 bg-opacity-80 p-6 shadow-lg rounded-lg text-center">
                    <h3 className="text-2xl font-bold mb-4 text-blue-200">AWS Certified Solutions Architect</h3>
                    <p className="text-gray-300 mb-6">Certified in designing and deploying scalable systems on AWS.</p>
                    <div className="flex justify-center">
                        <iframe
                            src="/AWS.pdf"
                            title="AWS Certificate"
                            className="w-full h-96 border-4 border-gray-700 shadow-lg rounded-md"
                        ></iframe>
                    </div>
                    <a
                        href="/AWS.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block bg-gray-600 text-white px-4 py-2 rounded shadow hover:bg-blue-300 transition duration-200"
                    >
                        View Full Certificate
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AWSCertification;
