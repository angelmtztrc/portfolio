import { useTheme } from 'next-themes';
const ToggleDark = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    !document.documentElement.classList.contains('dark')
      ? setTheme('dark')
      : setTheme('light');
  };
  return <button onClick={handleToggle}>Toggle</button>;
};

export default ToggleDark;
