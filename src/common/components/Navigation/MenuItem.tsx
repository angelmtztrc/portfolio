import cls from 'classnames';

const MenuItem = ({ title }: MenuItemProps) => {
  const selected = false;
  return (
    <li className="relative flex flex-1 cursor-pointer select-none flex-col items-center rounded px-8 py-2 transition-colors duration-300 ease-in hover:bg-raisin-black">
      <span
        className={cls(
          selected ? 'text-white' : 'text-cadet-grey',
          'font-body font-medium capitalize'
        )}
      >
        {title}
      </span>
      <span
        className={cls(
          selected ? 'bg-medium-state-blue' : 'bg-transparent',
          'absolute bottom-0 mt-1 inline h-1 w-10 rounded-full'
        )}
      />
    </li>
  );
};

type MenuItemProps = {
  title: string;
};

export default MenuItem;
