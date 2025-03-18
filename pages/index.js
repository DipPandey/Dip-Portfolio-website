// pages/index.js
import Layout from '../components/Layout';
import Home from '../components/Home';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import AWSCertification from '../components/AWSCertification';
import GlassCard from '../components/GlassCard';
import ChatDip from '../components/ChatDip'; // Import the ChatDip component

const Index = () => {
    return (
        <Layout>
            <GlassCard>
                <Home />
            </GlassCard>
            <GlassCard>
                <Experience />
            </GlassCard>
            <GlassCard>
                <AWSCertification />
                <Skills />
            </GlassCard>
            <GlassCard>
                <Projects />
            </GlassCard>

            {/* Add ChatDip at the bottom for persistent chatbot */}
            <ChatDip />
        </Layout>
    );
};

export default Index;
