import * as ScrollArea from '@radix-ui/react-scroll-area';

import { Button } from '@atoms';

const Navbar = () => {
  return (
    <ScrollArea.Root className="w-full overflow-hidden rounded-lg border border-dark-900 bg-darken-900 ">
      <ScrollArea.Viewport className="h-full w-full p-5">
        <nav className="flex w-full gap-4">
          <Button variant="contained" className="px-6 py-3">
            Projects
          </Button>
          {Array.from({ length: 10 }).map((i, idx) => (
            <Button key={idx} variant="default" className="px-6 py-3">
              Contact
            </Button>
          ))}
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
