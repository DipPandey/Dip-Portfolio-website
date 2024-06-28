// pages/index.js
import Layout from '../components/Layout';
import Home from '../components/Home';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import AWSCertification from '../components/AWSCertification';
import GlassCard from '../components/GlassCard';

const Index = () => {
    return (
        <Layout>
         
                <Home />
        
            
                <Experience />
           
            <GlassCard>
               
                 <AWSCertification />
                <Skills />
            </GlassCard>
         
                <Projects />
           
        </Layout>
    );
};

export default Index;
