import { NavbarItem } from '@/atoms';

const ROUTES = [
  {
    name: 'About Me',
    href: '#about-me'
  },
  {
    name: 'Projects',
    href: '#projects'
  },
  {
    name: 'Experience',
    href: '#experience'
  },
  {
    name: 'Contact Me',
    href: '#contact-me'
  }
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between my-16 container mx-auto">
      <p className="font-display text-lg font-semibold tracking-tight leading-6 text-content-white">
        angelmtz.<span className="text-primary-400">dev</span>
      </p>
      <ul className="flex space-x-16">
        {ROUTES.map(({ name, href }) => (
          <NavbarItem key={name} name={name} href={href} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
