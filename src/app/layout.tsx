import '@styles/globals.css';

import { AbilitiesList, SocialMediaList } from '@atoms';
import { Biography, Navbar } from '@molecules';

import fonts from '@utils/fonts.util';
import { ProfileService } from '@services';
import { DefaultLayout } from '@layouts';
import { Metadata } from 'next';

type EntryLayoutProps = {
  children: React.ReactNode;
};

const fetcher = async () => {
  const data = await ProfileService.findOne();
  return data.data;
};

const EntryLayout = async ({ children }: EntryLayoutProps) => {
  const data = await fetcher();

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
              <SocialMediaList data={data.attributes.social} />
              <AbilitiesList abilities={data.attributes.abilities} />
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

export const metadata: Metadata = {
  title: 'Angel Martinez - Web Developer',
  description:
    "Hi, I'm Angel a Web Developer and TypeScript enthusiast. Here you'll find a diverse range of my best projects and more information about my career as a web developer. ",
  openGraph: {
    url: 'https://www.angelmtz.dev',
    images: [{ url: '/images/og-cover.png' }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image'
  }
};

export default EntryLayout;
