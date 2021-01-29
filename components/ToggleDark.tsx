import { useTheme } from 'next-themes';
import { useEffect } from 'react';

const ToggleDark = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    if (!document.documentElement.classList.contains('dark')) {
      document.querySelector('span.toggle')?.classList.add('translate-x-full');
      setTheme('dark');
    } else {
      document
        .querySelector('span.toggle')
        ?.classList.remove('translate-x-full');
      setTheme('light');
    }
  };

  useEffect(() => {
    theme === 'dark'
      ? document.querySelector('span#toggle')?.classList.add('translate-x-full')
      : document
          .querySelector('span#toggle')
          ?.classList.remove('translate-x-full');
  }, [theme]);

  return (
    <label
      htmlFor="unchecked"
      className="inline-flex items-center cursor-pointer"
    >
      <span className="relative">
        <span className="bg-primary-500 block w-10 h-6 rounded-full shadow-inner"></span>
        <span
          id="toggle"
          className="focus-within:shadow-outline bg-primary-300 absolute inset-y-0 left-0 block ml-1 mt-1 w-4 h-4 rounded-full shadow transform transition-transform duration-300 ease-in-out"
        >
          <input
            id="unchecked"
            type="checkbox"
            onChange={handleToggle}
            className="absolute w-0 h-0 opacity-0"
          />
        </span>
      </span>
    </label>
  );
};

export default ToggleDark;
