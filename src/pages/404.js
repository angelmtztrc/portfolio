import { Link } from 'gatsby';
import React from 'react';
import NotFoundSVG from '../svg/not-found.inline.svg';

const NotFoundPage = () => (
  <div className="bg-light-secondary">
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto">
        <div className="grid gap-8 grid-cols-2">
          <main className="flex flex-col col-span-1 items-center justify-center">
            <h1 className="text-4xl font-bold">Not found</h1>
            <div className="w-full">
              <div className="mx-auto w-full max-w-xs">
                <p className="text-center">
                  The page you are looking for does not exist or was deleted.
                </p>
              </div>
            </div>
            <Link
              to="/"
              className="mt-4 px-4 py-2 hover:text-light-primary font-semibold hover:bg-dark-primary border-2 border-dark-primary uppercase transition-colors duration-300 ease-in-out"
            >
              Back to Home Page
            </Link>
          </main>
          <div className="col-span-1">
            <NotFoundSVG className="w-full h-64 object-cover lg:h-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
