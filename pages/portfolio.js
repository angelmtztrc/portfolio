import 'twin.macro';

// Components
import Layout from '../components/Layout/Layout';
import Content from '../components/ui/Content';
import Heading from '../components/ui/Heading';

const Portfolio = () => {
    return (
        <Layout>
            <Content>
                <div>
                    <Heading>Portfolio</Heading>
                    <p tw="text-base mb-5">
                        An example of my work is just the page you are on right
                        now. However, here are some of the best projects that I
                        have developed so that you can see much more of my work.
                    </p>
                </div>
                {/* TODO : Card Desing for a Project */}
            </Content>
        </Layout>
    );
};

export default Portfolio;
