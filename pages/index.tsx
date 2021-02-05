// containers
import Layout from '../containers/Layout';

// components
import Welcome from '../components/home/Welcome';
import About from '../components/home/About';
import Experience from '../components/home/Experience';

const IndexPage = () => (
  <Layout title={'Home'}>
    <Welcome />
    <About />
    <Experience />
  </Layout>
);

export default IndexPage;
