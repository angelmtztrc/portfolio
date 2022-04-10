import { HTMLAttributes, ReactNode } from 'react';
import cls from 'classnames';

const Button = ({ className, children, ...rest }: ButtonProps) => (
  <button
    type="button"
    className={cls(
      className,
      'inline-block cursor-pointer rounded border-2 border-medium-state-blue bg-medium-state-blue px-4 py-2 font-body text-base font-normal leading-relaxed text-white transition-colors duration-300 ease-in hover:border-medium-state-blue-dark hover:bg-medium-state-blue-dark'
    )}
    {...rest}
  >
    {children}
  </button>
);

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default Button;
