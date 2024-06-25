import Layout from '../components/Layout';
import Home from '../components/Home';

import Experience from '../components/Experience';
import Projects from '../components/Projects';

const Index = () => {
    return (
        <Layout>
            <Home />
            <Experience />
            <Projects />
        </Layout>
    );
};

export default Index;
