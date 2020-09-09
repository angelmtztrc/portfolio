import tw, { styled } from 'twin.macro';
import Link from 'next/link';

// Styled Components
const HeaderContainer = styled.header(() => [
    tw`w-full block`,
    tw`container mx-auto`,
    tw`flex justify-between items-center`,
    `height: 10%;`,
]);

const NavLink = tw.li`font-semibold mr-4 lg:mr-5 transition-all ease-in duration-300 text-gray-900 hover:text-gray-800`;

const Header = () => {
    return (
        <HeaderContainer>
            <div tw="py-2 px-4 text-white transition-all ease-in duration-300 bg-gray-900 hover:(bg-gray-800 cursor-pointer)">
                <Link href="/">AM</Link>
            </div>
            <nav>
                <ul tw="flex items-center">
                    <NavLink>
                        <Link href="/">Home</Link>
                    </NavLink>
                    <NavLink>
                        <Link href="/about">About</Link>
                    </NavLink>
                    <NavLink>
                        <Link href="/blog">Blog</Link>
                    </NavLink>
                    <NavLink>
                        <Link href="/portfolio">Portfolio</Link>
                    </NavLink>
                    <NavLink tw="mr-0">
                        <Link href="/contact">Contact</Link>
                    </NavLink>
                </ul>
            </nav>
        </HeaderContainer>
    );
};

export default Header;
