import Layout from '../components/Layout';
import Home from '../components/Home';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import GlassCard from '../components/GlassCard';
import Resume from '../components/Resume';

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
                <Projects />
            </GlassCard>
            <Resume/>
        </Layout>
    );
};

export default Index;
