'use client';

import { Transition } from '@headlessui/react';
import cls from 'classnames';

type SectionLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionLayout = ({ className, children }: SectionLayoutProps) => {
  return (
    <Transition
      show
      appear
      enter="transition-opacity duration-200 ease-in-out"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300 ease-in-out"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <section className={cls(className, 'rounded-lg border border-dark-900 bg-darken-900')}>
        {children}
      </section>
    </Transition>
  );
};

SectionLayout.defaultProps = {
  className: ''
};

export default SectionLayout;
