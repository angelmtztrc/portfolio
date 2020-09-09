import 'twin.macro';

// Components
import Layout from '../components/layout/Layout';
import Content from '../components/ui/Content';
import Heading from '../components/ui/Heading';
import BlogCard from '../components/blog/BlogCard';

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
                <div tw="mt-10 px-4 sm:px-8 grid grid-cols-1 gap-8 md:(px-0 grid-cols-2 gap-10) lg:(grid-cols-3 gap-10)">
                    <BlogCard />
                </div>
            </Content>
        </Layout>
    );
};

export default Blog;
