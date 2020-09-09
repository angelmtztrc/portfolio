import 'twin.macro';

// Components
import Layout from '../components/layout/Layout';
import Content from '../components/ui/Content';
import Heading from '../components/ui/Heading';
import ProjectCard from '../components/portfolio/ProjectCard';

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
                <div tw="mt-10 px-4 sm:px-8 grid grid-cols-1 gap-8 md:(px-0 grid-cols-2 gap-10) lg:(grid-cols-3 gap-10)">
                    <ProjectCard />
                </div>
            </Content>
        </Layout>
    );
};

export default Portfolio;
