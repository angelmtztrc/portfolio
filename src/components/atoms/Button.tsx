import cls from 'classnames';

const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      className={cls(
        className,
        'cursor-pointer rounded-lg px-6 py-3 font-body text-sm font-bold uppercase transition-colors duration-300 ease-in-out'
      )}
      {...props}
    />
  );
};

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
}

export default Button;
