import { HTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames';

export const Button = ({ className, children, ...rest }: ButtonProps) => {
  const cls = classnames(
    className,
    'inline-block px-4 py-2 text-purple-500 border border-purple-500 rounded'
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
