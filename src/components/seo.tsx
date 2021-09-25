import { NextSeo } from 'next-seo';

export const SEO = ({}: SEOProps) => {
  return (
    <NextSeo
      title="Angel M. - Portfolio"
      description="Full-Stack Web Developer. #TypeScript"
      openGraph={{
        title: 'Angel M. - Portfolio',
        description: 'Full-Stack Web Developer. #TypeScript',
        type: 'website'
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
