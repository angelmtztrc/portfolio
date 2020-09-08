import tw, { styled } from 'twin.macro';
import { Icon } from '@mdi/react';
import { mdiDevTo, mdiGithub, mdiTwitter, mdiEmail } from '@mdi/js';

// Components
import Layout from '../components/Layout/Layout';

// Styled Components
const MainContent = styled.main(() => [
    tw`container mx-auto`,
    tw`flex flex-col justify-center items-center`,
    `min-height: 76%;`,
    `margin-top: 2%;`,
    `margin-bottom: 2%;`,
]);

export default function Home() {
    return (
        <Layout>
            <MainContent>
                <div tw="grid grid-cols-1 gap-24 lg:(grid-cols-2 gap-16)">
                    <div tw="flex flex-col justify-center">
                        <p tw="text-4xl font-medium mb-2">
                            I'm Angel Martinez.
                        </p>
                        <p tw="text-lg mb-2">
                            Also known as angel_codes I am a developer with more
                            than 3 years of experience, mainly working in both
                            Front-end and Back-end JavaScript environments. I
                            currently live in Coah, Mexico.
                        </p>
                        <ul tw="flex items-center">
                            <li tw="text-lg mr-2">
                                <a tw="no-underline">
                                    <Icon path={mdiGithub} size={1.3} />
                                </a>
                            </li>
                            <li tw="text-lg mr-2">
                                <a tw="no-underline">
                                    <Icon path={mdiDevTo} size={1.3} />
                                </a>
                            </li>
                            <li tw="text-lg mr-2">
                                <a tw="no-underline">
                                    <Icon path={mdiTwitter} size={1.3} />
                                </a>
                            </li>
                            <li tw="text-lg mr-2">
                                <a tw="no-underline">
                                    <Icon path={mdiEmail} size={1.3} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img tw="w-full" src="/static/img/home-image.svg" />
                    </div>
                </div>
            </MainContent>
        </Layout>
    );
}
