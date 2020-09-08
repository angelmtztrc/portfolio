import tw, { styled } from 'twin.macro';

const HeaderContainer = styled.header(() => [
    tw`w-full block`,
    tw`container mx-auto`,
    tw`flex justify-between items-center`,
    `height: 10%;`,
]);

const Header = () => {
    return (
        <HeaderContainer>
            <div tw="py-2 px-4 bg-gray-900 text-white">AM</div>
            <nav>
                <ul tw="flex items-center">
                    <li tw="font-semibold mr-3">Home</li>
                    <li tw="font-semibold mr-3">About</li>
                    <li tw="font-semibold mr-3">Portfolio</li>
                    <li tw="font-semibold">Contact</li>
                </ul>
            </nav>
        </HeaderContainer>
    );
};

export default Header;
