import { NextSeo } from 'next-seo';

export const SEO = ({}: SEOProps) => {
  return (
    <NextSeo
      title="Angel M. - Portfolio"
      description="Full-Stack Web Developer. #TypeScript"
    />
  );
};

type SEOProps = {};
