import { use } from 'react';

import '@styles/globals.css';

import { AbilitiesList, SocialMediaList } from '@atoms';
import { Biography, Navbar } from '@molecules';

import fonts from '@utils/fonts.util';
import { UsersService } from '@services';
import { DefaultLayout } from '@layouts';

type EntryLayoutProps = {
  children: React.ReactNode;
};

const fetcher = async () => {
  const data = await UsersService.findOne();
  return data.user;
};

const EntryLayout = ({ children }: EntryLayoutProps) => {
  const data = use(fetcher());

  return (
    <html lang="en" className={fonts}>
      <head>
        <title>Angel Martinez | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <DefaultLayout>
          <div className="h-52 bg-primary-500" />
          <div className="container mx-auto grid grid-cols-1 gap-8 px-4 lg:grid-cols-12">
            <div className="-mt-12 flex flex-col gap-4 lg:col-span-3">
              <Biography data={data} />
              <SocialMediaList />
              <AbilitiesList abilities={data.abilities} />
            </div>
            <main className="flex flex-col gap-4 pb-12 lg:col-span-9 lg:-mt-12">
              <Navbar />
              {children}
            </main>
          </div>
          <footer className="py-2 text-center font-display text-sm font-light text-white">
            Designed & built by{' '}
            <span className="underline decoration-primary-500">Angel Martinez</span>.
          </footer>
        </DefaultLayout>
      </body>
    </html>
  );
};

export default EntryLayout;
