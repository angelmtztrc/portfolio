// containers
import Layout from '../containers/Layout';

// components
import Welcome from '../components/home/Welcome';
import Articles from '../components/home/Articles';

const IndexPage = () => (
  <Layout title={'Home'}>
    <Welcome />
    <Articles />
  </Layout>
);

export default IndexPage;
