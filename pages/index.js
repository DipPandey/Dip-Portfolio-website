import Layout from '../components/Layout';
import Home from '../components/Home';

import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Resume from '../components/Resume';

const Index = () => {
    return (
        <Layout>
            <Resume />
            <Home />
            <Experience />
            <Projects />
        </Layout>
    );
};

export default Index;
