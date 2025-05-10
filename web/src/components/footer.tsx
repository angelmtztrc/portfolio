import { NAVIGATION_OPTIONS } from '@/utils/navigation';
import { MediaIcons } from './media-icons';

export const Footer = () => {
  return (
    <footer className="container mx-auto mt-48 pt-16 pb-32 flex items-center justify-between">
      <p className="font-display text-lg leading-6 tracking-tight text-content-white font-semibold">
        angelmtz<span className="text-primary-400">.dev</span>
      </p>
      <ul className="flex space-x-16">
        {NAVIGATION_OPTIONS.map(option => (
          <li
            key={option + 'footer'}
            className="font-display text-sm leading-6 tracking-tight text-content-dark"
          >
            {option}
          </li>
        ))}
      </ul>
      <MediaIcons isShrink />
    </footer>
  );
};
