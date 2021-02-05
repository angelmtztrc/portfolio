// containers
import Layout from '../containers/Layout';

// components
import Welcome from '../components/home/Welcome';

const IndexPage = () => (
  <Layout title={'Home'}>
    <Welcome />
  </Layout>
);

export default IndexPage;
