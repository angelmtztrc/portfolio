// containers
import Layout from '../containers/Layout';

// components
import Welcome from '../components/home/Welcome';
import Articles from '../components/home/Articles';
import Projects from '../components/home/Projects';

const IndexPage = () => (
  <Layout title={'Home'}>
    <Welcome />
    <Articles />
    <Projects />
  </Layout>
);

export default IndexPage;
