import { DefaultSeo } from 'next-seo';

export const SEO = ({}: SEOProps) => {
  return (
    <DefaultSeo
      title="Angel Martinez | Web Developer"
      description="Web Developer. #TypeScript"
      openGraph={{
        url: 'https://www.angelmtz.dev',
        title: 'Angel Martinez | Web Developer',
        description: 'Web Developer. #TypeScript',
        images: [
          {
            url: '/images/og-cover.png'
          }
        ],
        type: 'website',
      }}
      twitter={{
        handle: '@angelmtztrc',
        site: '@angelmtztrc',
        cardType: 'summary_large_image'
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/favicon.ico'
        }
      ]}
    />
  );
};

type SEOProps = {};
