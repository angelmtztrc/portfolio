// containers
import Layout from '../containers/Layout';

// components
import Welcome from '../components/home/Welcome';
import About from '../components/home/About';
import Experience from '../components/home/Experience';
import Projects from '../components/home/Projects';
import Articles from '../components/home/Articles';

const IndexPage = () => (
  <Layout title={'Home'}>
    <Welcome />
    <About />
    <Experience />
    <Projects />
    <Articles />
  </Layout>
);

export default IndexPage;
