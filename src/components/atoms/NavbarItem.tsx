import Link from 'next/link';

type NavbarItemProps = {
  name: string;
  href: string;
};

const NavbarItem = ({ name, href }: NavbarItemProps) => {
  return (
    <li className="font-display text-sm leading-6 tracking-tight text-content-dark">
      <Link href={href}>{name}</Link>
    </li>
  );
};

export default NavbarItem;
