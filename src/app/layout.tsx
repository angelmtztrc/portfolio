import { use } from 'react';

import '@styles/globals.css';

import { AbilitiesList, SocialMediaList } from '@atoms';
import { Biography, Navbar } from '@molecules';

import { GET_USER } from '@graphql/queries';
import { IUser } from '@interfaces/user';
import fonts from '@utils/fonts.util';
import { request } from '@utils/request.util';

type EntryLayoutProps = {
  children: React.ReactNode;
};

const fetcher = async () => {
  const response = await request<{ user: IUser }>({ query: GET_USER });
  return response.user;
};

const EntryLayout = ({ children }: EntryLayoutProps) => {
  const data = use(fetcher());

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
              <Biography data={data} />
              <SocialMediaList />
              <AbilitiesList abilities={data.abilities} />
            </div>
            <main className="flex flex-col gap-4 pb-12 lg:col-span-9 lg:-mt-12">
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
