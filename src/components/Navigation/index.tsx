import { NAVIGATION_OPTIONS } from '@/utils/navigation.utils';

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto py-16">
      <div>
        <p className="font-display text-lg leading-6 tracking-tight text-content-white font-semibold">
          angelmtz<span className="text-primary-400">.dev</span>
        </p>
      </div>
      <ul className="flex space-x-16">
        {NAVIGATION_OPTIONS.map(option => (
          <li
            key={option}
            className="font-display text-sm leading-6 tracking-tight text-content-dark"
          >
            {option}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
