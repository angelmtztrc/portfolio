import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

export const cls = (...args: classNames.ArgumentArray) =>
  twMerge(classNames(args));
