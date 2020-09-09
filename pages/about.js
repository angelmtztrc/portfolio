import 'twin.macro';
import { Icon } from '@mdi/react';
import { mdiMenuRight } from '@mdi/js';

// Components
import Layout from '../components/Layout/Layout';
import Content from '../components/ui/Content';
import Heading from '../components/ui/Heading';

const About = () => {
    return (
        <Layout>
            <Content>
                <div>
                    <Heading>About Me</Heading>
                    <p tw="text-base mb-5">Short description of me.</p>
                </div>
                <div>
                    <Heading>Skills</Heading>
                    <p tw="text-base mb-5">
                        All my learning has been self-taught, with the help of
                        documentation and online courses that I have taken.
                        These are some of the main technologies that I use.
                    </p>
                    <div tw="w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:(grid-cols-4 gap-12)">
                        <ul tw="text-lg text-center md:text-left">
                            <li tw="flex items-center leading-tight">
                                <Icon path={mdiMenuRight} tw="mr-2" size={1} />
                                HTML5/CSS3
                            </li>
                            <li tw="flex items-center leading-tight">
                                <Icon path={mdiMenuRight} tw="mr-2" size={1} />
                                JavaScript
                            </li>
                            <li tw="flex items-center leading-tight">
                                <Icon path={mdiMenuRight} tw="mr-2" size={1} />
                                TypeScript (learning)
                            </li>
                        </ul>
                        <ul tw="text-lg text-center md:text-left">
                            <li tw="flex items-center leading-tight">
                                <Icon path={mdiMenuRight} tw="mr-2" size={1} />
                                ReactJS
                            </li>
                            <li tw="flex items-center leading-tight">
                                <Icon path={mdiMenuRight} tw="mr-2" size={1} />
                                GatsbyJS
                            </li>
                            <li tw="flex items-center leading-tight">
                                <Icon path={mdiMenuRight} tw="mr-2" size={1} />
                                NextJS
                            </li>
                        </ul>
                        <ul tw="text-lg text-center md:text-left">
                            <li tw="flex items-center leading-tight">
                                <Icon path={mdiMenuRight} tw="mr-2" size={1} />
                                NodeJS
                            </li>
                            <li tw="flex items-center leading-tight">
                                <Icon path={mdiMenuRight} tw="mr-2" size={1} />
                                ExpressJS
                            </li>
                            <li tw="flex items-center leading-tight">
                                <Icon path={mdiMenuRight} tw="mr-2" size={1} />
                                MongoDB/MySQL
                            </li>
                        </ul>
                        <ul tw="text-lg text-center md:text-left">
                            <li tw="flex items-center leading-tight">
                                <Icon path={mdiMenuRight} tw="mr-2" size={1} />
                                Git
                            </li>
                            <li tw="flex items-center leading-tight">
                                <Icon path={mdiMenuRight} tw="mr-2" size={1} />
                                GraphQL
                            </li>
                            <li tw="flex items-center leading-tight">
                                <Icon path={mdiMenuRight} tw="mr-2" size={1} />
                                Deno (learning)
                            </li>
                        </ul>
                    </div>
                </div>
            </Content>
        </Layout>
    );
};

export default About;
