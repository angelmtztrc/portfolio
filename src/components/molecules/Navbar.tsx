'use client';

import { usePathname } from 'next/navigation';
import * as ScrollArea from '@radix-ui/react-scroll-area';

import { Button } from '@atoms';

import { menu } from '@utils/menu.util';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <ScrollArea.Root className="w-full overflow-hidden rounded-lg border border-dark-900 bg-darken-900 ">
      <ScrollArea.Viewport className="h-full w-full p-5">
        <nav className="flex w-full gap-4">
          {menu.map(item => {
            const isActive = pathname === item.path;

            return (
              <Button
                key={item.title}
                variant={isActive ? 'contained' : 'default'}
                className="px-6 py-3"
              >
                {item.title}
              </Button>
            );
          })}
        </nav>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="horizontal" className="scroll-bar">
        <ScrollArea.Thumb className="relative h-full w-full flex-1 rounded-lg bg-primary-500 before:absolute before:top-1/2 before:left-1/2 before:min-h-[44px] before:min-w-[44px] before:translate-x-1/2 before:translate-y-1/2 before:transform before:content-['''']" />
      </ScrollArea.Scrollbar>

      <ScrollArea.Corner className="bg-red-300" />
    </ScrollArea.Root>
  );
};

export default Navbar;
