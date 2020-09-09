import 'twin.macro';

// Components
import Layout from '../components/Layout/Layout';
import Content from '../components/ui/Content';
import Heading from '../components/ui/Heading';

const Blog = () => {
    return (
        <Layout>
            <Content>
                <div>
                    <Heading>Blog</Heading>
                    <p tw="text-base mb-5">
                        Here you can see some blog posts about tutorials, tips,
                        or technologies that I have written.
                    </p>
                </div>
                {/* TODO : Card Desing for a Blog Post */}
            </Content>
        </Layout>
    );
};

export default Blog;
