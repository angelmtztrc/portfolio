import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cls = (...args: ClassValue[]) => twMerge(clsx(args));
