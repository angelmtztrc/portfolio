import '@styles/globals.css';

import { AbilitiesList, SocialMediaList } from '@atoms';
import { Biography, Navbar } from '@molecules';

import fonts from '@utils/fonts.util';

type EntryLayoutProps = {
  children: React.ReactNode;
};

const EntryLayout = ({ children }: EntryLayoutProps) => {
  return (
    <html lang="en" className={fonts}>
      <head>
        <title>Angel Martinez | Portfolio</title>
      </head>
      <body>
        <div className="min-h-screen bg-darken-900">
          <div className="h-52 bg-primary-500" />
          <div className="container mx-auto grid grid-cols-1 gap-8 px-4 lg:grid-cols-12">
            <div className="-mt-12 flex flex-col gap-4 lg:col-span-3">
              <Biography />
              <SocialMediaList />
              <AbilitiesList />
            </div>
            <main className="flex flex-col gap-4 lg:col-span-9 lg:-mt-12">
              <Navbar />
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
};

export default EntryLayout;
