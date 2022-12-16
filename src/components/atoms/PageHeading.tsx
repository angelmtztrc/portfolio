import { cloneElement } from 'react';

type PageHeadingProps = {
  title: string;
  icon: JSX.Element;
};

const PageHeading = ({ title, icon }: PageHeadingProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="rounded-full bg-purple-500 bg-opacity-10 p-2">
        {cloneElement(icon, {
          className: 'h-8 w-8 rounded-full text-primary-400'
        })}
      </div>
      <h2 className="font-display text-2xl font-bold text-white">{title}</h2>
    </div>
  );
};

export default PageHeading;
