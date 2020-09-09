import tw, { styled } from 'twin.macro';
import Link from 'next/link';
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';
import { useState } from 'react';

// Styled Components
const HeaderContainer = styled.header(({ isOpen }) => [
    `height: 10%;`,
    tw`transition-all ease-in duration-300`,
    tw`flex items-center justify-between flex-wrap`,
    tw`container mx-auto px-6 md:px-10 lg:px-0`,
    isOpen &&
        tw`h-auto sm:(rounded shadow py-3) lg:(rounded-none shadow-none py-0)`,
]);

const NavContainer = styled.nav(({ isOpen }) => [
    tw`transition-all ease-in duration-300`,
    tw`w-full flex-grow lg:(flex items-center w-auto)`,
    isOpen
        ? tw`block transition-all ease-in duration-300 `
        : tw`hidden transition-all ease-in duration-300`,
]);

const NavLink = styled.li(() => [
    tw`font-semibold text-gray-900`,
    tw`transition-all ease-in duration-300`,
    tw`mr-4 mb-2`,
    tw`block px-2 py-2 hover:(bg-gray-900 rounded text-white)`,
    tw`lg:hover:(bg-white text-gray-800)`,
    tw`lg:(inline-block mr-5 mb-0)`,
]);

const Header = () => {
    const [navopen, setNavOpen] = useState(true);

    const handleClick = e => {
        setNavOpen(!navopen);
    };

    return (
        <HeaderContainer isOpen={navopen}>
            <div tw="py-2 px-4 text-white transition-all ease-in duration-300 bg-gray-900 hover:(bg-gray-800 cursor-pointer)">
                <Link href="/">AM</Link>
            </div>
            <div tw="block lg:hidden">
                <Icon onClick={handleClick} path={mdiMenu} size={1} />
            </div>
            <NavContainer isOpen={navopen}>
                <ul tw="text-sm mt-3 lg:(flex-grow flex justify-end)">
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
            </NavContainer>
        </HeaderContainer>
    );
};

export default Header;
