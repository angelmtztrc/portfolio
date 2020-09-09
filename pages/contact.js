import 'twin.macro';

// Components
import Layout from '../components/layout/Layout';
import Content from '../components/ui/Content';
import Heading from '../components/ui/Heading';

const Portfolio = () => {
    return (
        <Layout>
            <Content>
                <div>
                    <Heading>Contact</Heading>
                    <p tw="text-base mb-5">
                        Do you need my skills? Contact me to give you more
                        information about what I do, and in this way to be able
                        to provide you with a specific solution for your needs.
                    </p>
                </div>
                {/* TODO : Form for send emails */}
            </Content>
        </Layout>
    );
};

export default Portfolio;
