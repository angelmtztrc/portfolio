import { DefaultSeo } from 'next-seo';

export const SEO = ({}: SEOProps) => {
  return (
    <DefaultSeo
      title="Angel M. - Portfolio"
      description="Full-Stack Web Developer. #TypeScript"
      openGraph={{
        title: 'Angel M. - Portfolio',
        description: 'Full-Stack Web Developer. #TypeScript',
        images: [
          {
            url: '/images/site.png'
          }
        ],
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
