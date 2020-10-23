import React from 'react';
import WorkingOnSVG from '../svg/working-on.inline.svg';

const WorkingOn = () => {
  return (
    <div className="container mx-auto my-auto px-8 lg:px-0">
      <div className="flex items-center justify-center py-6">
        <main className="grid gap-12 grid-cols-2 lg:gap-10">
          <div className="flex flex-col col-span-2 items-center justify-center md:col-span-1">
            <h1 className="text-center text-4xl font-bold">Working on!</h1>
            <div className="mx-auto w-full max-w-xs">
              <p className="text-center">
                It's not ready yet, but don't worry, it will be soon.
              </p>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <WorkingOnSVG className="w-full h-64 object-cover lg:h-full" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default WorkingOn;
