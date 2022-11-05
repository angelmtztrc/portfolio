import { GraphQLClient } from 'graphql-request';

type Props = {
  query: string;
  variables?: Record<string, unknown>;
  preview?: boolean;
};

export const request = <R>({ query, variables, preview }: Props): Promise<R> => {
  const endpoint = preview ? `https://graphql.datocms.com/preview` : `https://graphql.datocms.com/`;

  const client = new GraphQLClient(endpoint, {
    headers: {
      Authorization: process.env.CMS_KEY || ''
    }
  });

  return client.request(query, variables);
};
