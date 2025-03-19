import { useState } from 'react';
import { FaRobot, FaTimes, FaPaperPlane, FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

const ChatDip = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages([...messages, userMessage]);
        setLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input }),
            });

            const data = await response.json();
            const botMessage = { role: 'bot', content: data.reply };

            setMessages([...messages, userMessage, botMessage]);
            setInput('');
        } catch (error) {
            console.error('Error:', error);
            setMessages([...messages, userMessage, { role: 'bot', content: 'Oops, something went wrong! 😅' }]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !loading) sendMessage();
    };

    const quickQuestions = [
        'Dips personality type',
        'Tell me about your projects.',
        'What skills do you have?',
        'What’s your experience with AWS?',
        'Can you explain your Stock Management App?',
        'How did you use Next.js in your portfolio?',
        'What’s your favorite Python project?',
        'How does OAuth work in your Secure Login app?',
        'What’s your experience with MongoDB?',
        'Tell me about your AI integrations.',
        'How do you handle REST APIs?',
    ];

    // Enhanced visual rendering for bot responses
    const renderMessageContent = (content, role) => {
        if (role === 'bot') {
            const lines = content.split('\n').filter((line) => line.trim());
            return (
                <ul className="space-y-2">
                    {lines.map((line, index) => {
                        const urlRegex = /(https?:\/\/[^\s]+)/g;
                        const emailRegex = /(\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b)/g;
                        const parts = line.split(/(\s+)/).map((part, i) => {
                            if (urlRegex.test(part)) {
                                return (
                                    <a
                                        key={i}
                                        href={part}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-bold text-blue-300 bg-blue-900/30 px-1 rounded hover:text-blue-200 hover:bg-blue-900/50 transition-all"
                                    >
                                        {part.replace('- ', '')} 🌐
                                    </a>
                                );
                            } else if (emailRegex.test(part)) {
                                return (
                                    <a
                                        key={i}
                                        href={`mailto:${part}`}
                                        className="font-bold text-blue-300 bg-blue-900/30 px-1 rounded hover:text-blue-200 hover:bg-blue-900/50 transition-all"
                                    >
                                        {part.replace('- ', '')} ✉️
                                    </a>
                                );
                            }
                            return <span key={i}>{part.replace('- ', '')}</span>;
                        });

                        // Add emojis based on content keywords
                        let emoji = '🚀';
                        if (line.toLowerCase().includes('project')) emoji = '💻';
                        else if (line.toLowerCase().includes('skill')) emoji = '🛠️';
                        else if (line.toLowerCase().includes('aws') || line.toLowerCase().includes('cloud')) emoji = '☁️';
                        else if (line.toLowerCase().includes('email') || line.toLowerCase().includes('contact')) emoji = '📧';
                        else if (line.toLowerCase().includes('github') || line.toLowerCase().includes('repo')) emoji = '🐙';

                        return (
                            <li
                                key={index}
                                className={`flex items-start space-x-2 animate-pop-in delay-${index}`}
                            >
                                <span className="text-xl">{emoji}</span>
                                <span className="text-gray-100 text-sm bg-gray-600/50 px-2 py-1 rounded-lg">{parts}</span>
                            </li>
                        );
                    })}
                </ul>
            );
        }
        return <span className="text-sm text-white">{content}</span>;
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {/* Chat Toggle Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center px-4 py-2 sm:px-5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                    <FaRobot className="mr-2" /> Ask about Dip Pandey
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="w-72 sm:w-80 md:w-96 bg-gray-900 text-white rounded-xl shadow-2xl flex flex-col transition-all duration-300 transform animate-slide-up">
                    {/* Header */}
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-700 to-purple-700 rounded-t-xl">
                        <h2 className="text-base sm:text-lg font-semibold flex items-center">
                            <FaRobot className="mr-2 animate-spin-slow" /> ChatDip 🤖
                        </h2>
                        <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300 transition-colors">
                            <FaTimes size={16} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="h-60 sm:h-72 overflow-y-auto p-3 bg-gray-800 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-900 relative">
                        {messages.length === 0 ? (
                            <p className="text-gray-400 text-center italic text-sm">Hey recruiter! Ask me about Dip’s skills or projects! 😎</p>
                        ) : (
                            messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`mb-3 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-lg shadow-md ${msg.role === 'user'
                                                ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white'
                                                : 'bg-gradient-to-r from-gray-700 to-gray-600 text-gray-100'
                                            }`}
                                    >
                                        <span className="font-semibold text-xs text-gray-300">
                                            {msg.role === 'user' ? 'You: ' : 'ChatDip: '}
                                        </span>
                                        {renderMessageContent(msg.content, msg.role)}
                                    </div>
                                </div>
                            ))
                        )}
                        {loading && (
                            <div className="text-gray-400 text-xs flex items-center justify-center">
                                <span className="animate-pulse">ChatDip is cooking up an answer</span>
                                <span className="dot-1">.</span>
                                <span className="dot-2">.</span>
                                <span className="dot-3">.</span>
                            </div>
                        )}

                        {/* Floating Social Links */}
                        <div className="absolute top-2 right-2 flex flex-col gap-2">
                            <a
                                href="https://github.com/DipPandey"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white bg-gray-800 p-1.5 rounded-full shadow-md hover:bg-gray-700 transition-all transform hover:scale-110"
                                title="GitHub"
                            >
                                <FaGithub size={16} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/dip-pandey-a402b81b4/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white bg-gray-800 p-1.5 rounded-full shadow-md hover:bg-gray-700 transition-all transform hover:scale-110"
                                title="LinkedIn"
                            >
                                <FaLinkedin size={16} />
                            </a>
                            <a
                                href="https://www.instagram.com/dip.devs/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white bg-gray-800 p-1.5 rounded-full shadow-md hover:bg-gray-700 transition-all transform hover:scale-110"
                                title="Instagram"
                            >
                                <FaInstagram size={16} />
                            </a>
                            <a
                                href="https://x.com/DipdevJourney"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white bg-gray-800 p-1.5 rounded-full shadow-md hover:bg-gray-700 transition-all transform hover:scale-110"
                                title="Twitter"
                            >
                                <FaTwitter size={16} />
                            </a>
                            <a
                                href="mailto:dippandey61@outlook.com"
                                className="text-gray-300 hover:text-white bg-gray-800 p-1.5 rounded-full shadow-md hover:bg-gray-700 transition-all transform hover:scale-110"
                                title="Email"
                            >
                                <FaEnvelope size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Question Buttons */}
                    <div className="p-2 bg-gray-900 border-t border-gray-700">
                        <div className="flex flex-wrap gap-1.5">
                            {quickQuestions.map((question, index) => (
                                <button
                                    key={index}
                                    onClick={() => setInput(question)}
                                    className="px-2 py-1 text-xs bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors transform hover:scale-105 disabled:bg-gray-600"
                                    disabled={loading}
                                >
                                    {question}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="flex p-2 bg-gray-900 border-t border-gray-700 rounded-b-xl">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask about Dip..."
                            className="flex-grow p-2 text-sm rounded-l-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            disabled={loading}
                        />
                        <button
                            onClick={sendMessage}
                            className="px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:bg-gray-600"
                            disabled={loading}
                        >
                            {loading ? '...' : <FaPaperPlane size={14} />}
                        </button>
                    </div>
                </div>
            )}
            <style jsx>{`
        /* Custom Scrollbar */
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: #2563eb;
          border-radius: 9999px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #1f2937;
        }

        /* Animations */
        @keyframes slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-in;
        }

        @keyframes pop-in {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-pop-in {
          animation: pop-in 0.2s ease-out forwards;
        }
        .delay-0 { animation-delay: 0s; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        .delay-5 { animation-delay: 0.5s; }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 5s linear infinite;
        }

        /* Typing dots animation */
        .dot-1 { animation: blink 1.4s infinite 0s; }
        .dot-2 { animation: blink 1.4s infinite 0.2s; }
        .dot-3 { animation: blink 1.4s infinite 0.4s; }
        @keyframes blink {
          0% { opacity: 0.2; }
          20% { opacity: 1; }
          100% { opacity: 0.2; }
        }
      `}</style>
        </div>
    );
};

export default ChatDip;