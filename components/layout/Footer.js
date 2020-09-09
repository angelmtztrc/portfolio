import tw, { styled } from 'twin.macro';

const FooterContainer = styled.footer(() => [
    tw`w-full block`,
    tw`container mx-auto px-6 md:px-10 lg:px-0`,
    tw`flex justify-center items-center`,
    `height: 10%;`,
]);

const Footer = () => {
    const now = new Date();

    return (
        <FooterContainer>
            <p tw="text-lg font-medium text-center">
                Angel Martinez &copy; All right reserved {now.getFullYear()}
            </p>
        </FooterContainer>
    );
};

export default Footer;
