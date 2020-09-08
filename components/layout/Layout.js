import { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import tw, { styled } from 'twin.macro';

// Components
import Header from './Header';
import Footer from './Footer';

// Styled Components
const Content = styled.div(() => [
    tw`min-h-screen py-8 lg:py-12 xl:py-16`,
    `height: 100vh;`,
]);

const Layout = ({ children }) => {
    return (
        <Fragment>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Content>
                <Header />
                {children}
                <Footer />
            </Content>
        </Fragment>
    );
};

Layout.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Layout;
