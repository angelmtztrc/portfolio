import { forwardRef } from 'react';
import cls from 'classnames';

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  variant?: 'default' | 'contained';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { type = 'button', variant, className, ...rest } = props;

  const classnames = cls(
    variant === 'default' && 'bg-transparent text-white hover:bg-primary-500 hover:bg-opacity-10',
    variant === 'contained' && 'bg-primary-500 text-white',
    'group rounded-lg transition duration-300 ease-in font-body text-sm font-bold uppercase',
    className
  );

  // eslint-disable-next-line react/button-has-type
  return <button ref={ref} type={type} className={classnames} {...rest} />;
});

Button.displayName = 'Button';

Button.defaultProps = {
  variant: 'default'
};

export default Button;
