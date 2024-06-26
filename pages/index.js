// pages/index.js
import Layout from '../components/Layout';
import Home from '../components/Home';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import GlassCard from '../components/GlassCard';
import Skills from '../components/Skills';

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
                <Skills />
            </GlassCard>
            <GlassCard>
                <Projects />
            </GlassCard>
           
        </Layout>
    );
};

export default Index;
