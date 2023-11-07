import { forwardRef } from 'react';
import { cls } from '@/libs/cls.lib';

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  variant?: 'contained' | 'ghost';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { type = 'button', variant, className, ...rest } = props;

  const classnames = cls(
    variant === 'contained' && 'border border-primary-300',
    'border border-primary-300 px-8 py-2 rounded-lg font-body text-lg font-semibold leading-8 text-primary-100',
    'hover:bg-primary-500/10 transition-colors ease-in duration-200',
    className
  );

  // eslint-disable-next-line react/button-has-type
  return <button ref={ref} type={type} className={classnames} {...rest} />;
});

Button.displayName = 'Button';

Button.defaultProps = {
  variant: 'contained'
};

export default Button;
