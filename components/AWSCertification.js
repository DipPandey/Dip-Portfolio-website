import useVisibility from './useVisibility';

const AWSCertification = () => {
    const ref = useVisibility();

    return (
        <section
            id="aws-certification"
            ref={ref}
            className="animated opacity-0 py-10 lg:py-20 relative overflow-hidden text-blue-100"
        >
            {/* Animated gradient background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0a0f1f] via-[#0a1126] to-[#0e132c] animate-gradient-flow"></div>

            <div className="container mx-auto px-4">
                <h2 className="text-center text-4xl font-extrabold mb-10 uppercase tracking-wider relative">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-purple-400 drop-shadow-md">
                        AWS Certification
                    </span>
                </h2>
                <div className="flex flex-col lg:flex-row lg:justify-center gap-8">
                    <div className="lg:w-2/3 mx-auto">
                        <div className="relative bg-black/30 backdrop-blur-md p-6 rounded-lg shadow-2xl border border-white/10 transition-transform duration-300 hover:scale-[1.01] hover:shadow-blue-500/30">
                            <h3 className="text-2xl font-bold mb-2 text-blue-200 uppercase tracking-wide">
                                AWS Certified Solutions Architect
                            </h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Certified in designing and deploying scalable, highly available, and fault-tolerant systems on AWS. Expertise in leveraging AWS services for cost-optimization, performance, and security.
                            </p>
                            <div className="overflow-hidden rounded-md border-4 border-gray-700 shadow-lg hover:shadow-blue-300/50 transition-shadow duration-300">
                                <iframe
                                    src="/AWS.pdf"
                                    title="AWS Certificate"
                                    className="w-full h-96"
                                ></iframe>
                            </div>
                            <div className="text-center mt-6">
                                <a
                                    href="/AWS.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-3 rounded-full shadow-md font-semibold uppercase tracking-wider transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/50"
                                >
                                    View Full Certificate
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes gradientFlow {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
                .animate-gradient-flow {
                    background: linear-gradient(-45deg, #0a0f1f, #0a1126, #0e132c, #081020);
                    background-size: 400% 400%;
                    animation: gradientFlow 15s ease infinite;
                }
            `}</style>
        </section>
    );
};

export default AWSCertification;
