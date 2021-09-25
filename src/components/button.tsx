import { HTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames';

export const Button = ({ className, children, ...rest }: ButtonProps) => {
  const cls = classnames(
    className,
    'inline-block px-4 py-2 text-medium-state-blue border border-medium-state-blue rounded hover:bg-medium-state-blue hover:text-white transition-colors ease-in duration-300'
  );

  return (
    <button className={cls} type="button" {...rest}>
      {children}
    </button>
  );
};

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
