const Navigation = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto py-16">
      <div>
        <p className="font-display text-lg leading-6 tracking-tight text-content-white">
          angelmtz<span className="text-primary-400">.dev</span>
        </p>
      </div>
      <ul className="flex space-x-16">
        <li className="font-display text-sm leading-6 tracking-tight text-content-dark">
          About Me
        </li>
        <li className="font-display text-sm leading-6 tracking-tight text-content-dark">
          Projects
        </li>
        <li className="font-display text-sm leading-6 tracking-tight text-content-dark">
          Career History
        </li>
        <li className="font-display text-sm leading-6 tracking-tight text-content-dark">
          Contact Me
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
