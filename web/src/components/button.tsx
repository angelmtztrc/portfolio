import { cls } from '@/utils/classname';
import { cva, VariantProps } from 'cva';

const button = cva(
  'py-2 px-8 font-body text-lg leading-8 font-semibold text-primary-100 rounded-lg transition-colors ease-in duration-200',
  {
    variants: {
      intent: {
        primary: 'border border-primary-300 hover:bg-primary-300/15',
        ghost: 'border-none bg-transparent hover:bg-primary-300/15'
      }
    },
    defaultVariants: {
      intent: 'primary'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button = ({ className, intent, ...props }: ButtonProps) => (
  <button className={cls(button({ intent }), className)} {...props} />
);
